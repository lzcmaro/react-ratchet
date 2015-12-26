import React from 'react';
import ReactDOM from 'react-dom';
import equal from 'deep-equal';
import ScrollInfinite from './ScrollInfinite';
import ScrollRefresh from './ScrollRefresh';
const { PropTypes } = React;

// Events available on iScroll instance
// [`iScroll event name`, `react component event name`]
const availableEvents = [
  ['beforeScrollStart', "onBeforeScrollStart"],
  ['scrollCancel', "onScrollCancel"],
  ['scrollStart', "onScrollStart"],
  ['scroll', "onScroll"],
  ['scrollEnd', "onScrollEnd"],
  ['flick', "onFlick"],
  ['zoomStart', "onZoomStart"],
  ['zoomEnd', "onZoomEnd"]
]

const iScrollPropType = (props, propName, componentName) => {
  const iScroll = props[propName]
  const proto   = iScroll && iScroll.prototype

  if(!iScroll || !proto || !proto.version || !proto.scrollTo) {
    return new Error(componentName + ": iScroll not passed to component props.")
  } else {
    if(!/^5\..*/.test(proto.version)) {
      console.warn(componentName + ": different version than 5.x.y of iScroll is required. Some features won't work properly.")
    }

    if(props.options && props.options.zoom && !proto.zoom) {
      console.warn(componentName + ": options.zoom is set, but iscroll-zoom version is not required. Zoom feature won't work properly.")
    }
  }
}

// Generate propTypes with event function validating
const propTypes = {
  defer: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  options: PropTypes.object,
  //iScroll: iScrollPropType,
  onRefresh: PropTypes.func
}

for(var i = 0; i < availableEvents.length; i++) {
  propTypes[availableEvents[i][1]] = PropTypes.func
}

class Scroll extends React.Component {

  static displayName = 'Scroll'

  static propTypes = propTypes

  static defaultProps = {
    defer: 0,
    options: {
        mouseWheel: true,
        scrollbars: true,
        fadeScrollbars:true,
        probeType: 3
    },
    style: {
      position: "relative",
      height: "100%",
      width: "100%",
      overflow: "hidden"
    },
    onScroll:function(){},
    onScrollEnd:function(){}
  }

  constructor(props) {
    super(props)
    this._queuedCallbacks = []
    this._iScrollBindedEvents = {}
    this.state={
        showInfinite:false
    }
  }

  componentDidMount() {
    this.iScroll = require('iscroll/build/iscroll-probe');
    this._initializeIScroll()
  }

  componentWillUnmount() {
    this._teardownIScroll()
  }

  // There is no state, we can compare only props.
  shouldComponentUpdate(nextProps) {
    return !equal(this.props, nextProps)
  }

  // Check if iScroll options has changed and recreate instance with new one
  componentDidUpdate(prevProps) {
    // If options are same, iScroll behaviour will not change. Just refresh events and trigger refresh
    if(equal(prevProps.options, this.props.options)) {
      this._updateIScrollEvents(prevProps, this.props)
      this.refresh()

    // If options changed, we will destroy iScroll instance and create new one with same scroll position
    // TODO test if this will work with indicators
    } else {
      this.withIScroll(true, (iScrollInstance) => {
        // Save current state
        const x     = iScrollInstance.x
        const y     = iScrollInstance.y
        const scale = iScrollInstance.scale

        // Destroy current and Create new instance of iScroll
        this._teardownIScroll()
        this._initializeIScroll()

        this.withIScroll(true, (newIScrollInstance) => {
          // Restore previous state
          if(scale && newIScrollInstance.zoom)
            newIScrollInstance.zoom(scale, 0, 0, 0)

          newIScrollInstance.scrollTo(x,y)
        })
      })
    }
  }

  getIScroll() {
    return this._iScrollInstance;
  }

  getIScrollInstance() {
    console.warn("Function 'getIScrollInstance' is deprecated. Instead use 'getIScroll'")
    return this._iScrollInstance;
  }

  withIScroll(waitForInit, callback) {
    if(!callback && typeof waitForInit == "function") {
      callback = waitForInit
    }

    if(this.getIScroll()) {
      callback(this.getIScroll())
    } else if (waitForInit === true) {
      this._queuedCallbacks.push(callback)
    }
  }

  refresh() {
    this.withIScroll((iScrollInstance) => iScrollInstance.refresh())
  }

  _runInitializeIScroll() {
    // const {iScroll, options} = this.props

    // Create iScroll instance with given options
    
    const iScrollInstance = new this.iScroll(ReactDOM.findDOMNode(this), this.props.options)
    this._iScrollInstance = iScrollInstance

    // TODO there should be new event 'onInitialize'
    this._triggerRefreshEvent()

    // Patch iScroll instance .refresh() function to trigger our onRefresh event
    const origRefresh = iScrollInstance.refresh

    iScrollInstance.refresh = () => {
      origRefresh.apply(iScrollInstance)
      this._triggerRefreshEvent()
    }

    // Bind iScroll events
    this._bindIScrollEvents()

    this._callQueuedCallbacks()
  }

  _initializeIScroll() {
    const {defer} = this.props

    if(defer === false) {
      this._runInitializeIScroll()
    } else {
      setTimeout(() => this._runInitializeIScroll(), defer)
    }
  }

  _callQueuedCallbacks() {
    const callbacks = this._queuedCallbacks,
          len = callbacks.length;

    this._queuedCallbacks = []

    for(let i = 0; i < len; i++) {
      callbacks[i](this.getIScroll())
    }
  }

  _teardownIScroll() {
    if (this._iScrollInstance) {
      this._iScrollInstance.destroy()
      this._iScrollInstance = undefined
    }
  }

  _bindIScrollEvents() {
    // Bind events on iScroll instance
    this._iScrollBindedEvents = {}
    this._updateIScrollEvents({}, this.props)
  }

  // Iterate through available events and update one by one
  _updateIScrollEvents(prevProps, nextProps) {
    const len = availableEvents.length;

    for(let i = 0; i < len; i++) {
      const [iScrollEventName, reactEventName] = availableEvents[i]
      this._updateIScrollEvent(iScrollEventName, prevProps[reactEventName], nextProps[reactEventName])
    }
  }

  //拦截scroll、scrollEnd事件
  _currentEventBefore(iScrollEventName,iScrollInstance){
    let infiniteEl = ReactDOM.findDOMNode(this.refs.infinite),
        refreshEl = ReactDOM.findDOMNode(this.refs.refresh);

    if(iScrollEventName=='scroll'){
        if (this.props.infinite&&iScrollInstance.y<0&&iScrollInstance.y < (iScrollInstance.maxScrollY - 5)) {
            infiniteEl.innerHTML='上滑加载更多...';
            infiniteEl.style.display='block';            
        }else if(this.props.refresh&&iScrollInstance.y>0&&iScrollInstance.y >=5){
            refreshEl.innerHTML='松开刷新...';
            refreshEl.style.display='block';
        }
    }

    if(iScrollEventName=='scrollEnd'){
        if (this.props.infinite&&iScrollInstance.y<0&&iScrollInstance.y <= iScrollInstance.maxScrollY) {
            infiniteEl.innerHTML='正在加载...';
            this.props.onInfinite&&this.props.onInfinite();
        }else if(this.props.refresh&&iScrollInstance.y>=0&&iScrollInstance.y < 5){
            refreshEl.innerHTML='正在刷新...';
            this.props.onPullRefresh&&this.props.onPullRefresh(function(){
              refreshEl.style.display='none';
            });
        }
    }
  }

  // Unbind and/or Bind event if it was changed during update
  _updateIScrollEvent(iScrollEventName, prevEvent, currentEvent) {
    let _this = this;
    if(prevEvent !== currentEvent) {
      this.withIScroll(true, (iScrollInstance) => {
        const currentEvents = this._iScrollBindedEvents

        if(prevEvent) {
          iScrollInstance.off(iScrollEventName, currentEvents[iScrollEventName])
          currentEvents[iScrollEventName] = undefined
        }

        if(currentEvent) {
          const wrappedCallback = function(...args) {
            _this._currentEventBefore(iScrollEventName,iScrollInstance);
            currentEvent(iScrollInstance, ...args)
          }

          iScrollInstance.on(iScrollEventName, wrappedCallback)
          currentEvents[iScrollEventName] = wrappedCallback
        }
      })
    }
  }

  _triggerRefreshEvent() {
    const {onRefresh} = this.props

    if(onRefresh) {
      this.withIScroll((iScrollInstance) => onRefresh(iScrollInstance))
    }
  }

  render() {
    // Keep only html properties
    const htmlProps = {}

    for(const prop in this.props) {
      if(!propTypes[prop]) {
        htmlProps[prop] = this.props[prop]
      }
    }

    let {children,...otherProps} = htmlProps;

    return (
        <div {...otherProps}>
            <div>
                {this.props.refresh ? <Scroll.refresh ref="refresh" /> : null }
                {children}
                {this.props.infinite ? <Scroll.infinite ref="infinite" />: null }
            </div>
        </div>
    )
  }
}

Scroll.infinite = ScrollInfinite; 
Scroll.refresh = ScrollRefresh;

export default Scroll;