import React, { cloneElement } from 'react';
import Portal from './Portal';
import elementType from 'react-prop-types/lib/elementType';

import ownerDocument from './utils/ownerDocument';
import addEventListener from './utils/addEventListener';
import addFocusListener from './utils/addFocusListener';
import canUseDom from 'dom-helpers/util/inDOM';
import activeElement from 'dom-helpers/activeElement';
import contains from 'dom-helpers/query/contains';
import getContainer from './utils/getContainer';


let BaseModal = React.createClass({

  displayName: 'BaseModal',

  propTypes: {
    /**
     * A callback fired when the Modal is opening.
     */
    onShow: React.PropTypes.func,

    /**
     * A callback fired when either the backdrop is clicked, or the escape key is pressed.
     */
    onHide: React.PropTypes.func,

    /**
     * Include a backdrop component.
     */
    backdrop: React.PropTypes.bool,

    /**
     * A callback fired when the backdrop, if specified, is clicked.
     */
    onBackdropClick: React.PropTypes.func,

    /**
     * A style object for the backdrop component.
     */
    backdropStyle: React.PropTypes.object,

    /**
     * A css class or classes for the backdrop component.
     */
    backdropClassName: React.PropTypes.string,

    /**
     * A css class or set of classes applied to the modal container when the modal is open,
     * and removed when it is closed.
     */
    containerClassName: React.PropTypes.string,

    /**
     * A `<Transition/>` component to use for the dialog and backdrop components.
     */
    transition: elementType,

    /**
     * The `timeout` of the dialog transition if specified. This number is used to ensure that transition callbacks are always
     * fired, even if browser transition events are canceled.
     *
     * See the Transition `timeout` prop for more infomation.
     */
    transitionTimeout: React.PropTypes.number,

    /**
     * The `timeout` of the backdrop transition if specified. This number is used to ensure that transition callbacks are always
     * fired, even if browser transition events are canceled.
     *
     * See the Transition `timeout` prop for more infomation.
     */
    backdropTransitionTimeout: React.PropTypes.number,

    /**
     * When `true` The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes.
     * Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen readers.
     */
    autoFocus: React.PropTypes.bool,

    /**
     * When `true` The modal will prevent focus from leaving the Modal while open.
     * Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen readers.
     */
    enforceFocus: React.PropTypes.bool
  },

  getDefaultProps() {
    let noop = () => {};

    return {
      show: false,
      backdrop: true,
      autoFocus: true,
      enforceFocus: true,
      onHide: noop
    };
  },

  getInitialState(){
    return {exited: !this.props.show};
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      this.setState({exited: false});
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      this.setState({exited: true});
    }
  },

  componentWillUpdate(nextProps){
    if (nextProps.show) {
      this.checkForFocus();
    }
  },

  componentDidMount() {
    if ( this.props.show ){
      this.onShow();
    }
  },

  componentDidUpdate(prevProps) {
    let { transition } = this.props;

    if ( prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    }
    else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  },

  componentWillUnmount() {
    let { show, transition } = this.props;

    if (show || (transition && !this.state.exited)) {
      this.onHide();
    }
  },

  render() {

    let {
      children,
      transition: Transition,
      backdrop,
      transitionTimeout,
      ...props } = this.props;

    let { onExit, onExiting, onEnter, onEntering, onEntered } = props;

    let show = !!props.show;
    let dialog = React.Children.only(this.props.children);

    let setMountNode = ref => this.mountNode = (!ref || ref.getMountNode());

    const mountModal = show || (Transition && !this.state.exited);

    if (!mountModal) {
      return null;
    }

    let { role, tabIndex } = dialog.props;

    if (role === undefined || tabIndex === undefined) {
      dialog = cloneElement(dialog, {
          role: role === undefined ? 'content' : role,
          tabIndex: tabIndex == null ? '-1' : tabIndex
        });
    }

    if (Transition) {
      dialog = (
        <Transition
          transitionAppear
          unmountOnExit
          in={show}
          timeout={transitionTimeout}
          onExit={onExit}
          onExiting={onExiting}
          onExited={this.handleHidden}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
        >
          { dialog }
        </Transition>
      );
    }

    return (
      <Portal
        ref={setMountNode}
        container={props.container}
      >
        <div
          ref={'modal'}
          role={props.role || 'modal'}
          style={props.style}
          className={props.className}
        >
          { backdrop && this.renderBackdrop() }
          { dialog }
        </div>
      </Portal>
    );

  },

  renderBackdrop() {
    let {
      transition: Transition,
      backdropTransitionTimeout } = this.props;

    let backdrop = (
      <div 
        ref="backdrop"
        role="backdrop"
        style={this.props.backdropStyle}
        className={this.props.backdropClassName}
        onTouchEnd={this.handleBackdropClick}/>
    );

    if (Transition) {
      backdrop = (
        <Transition transitionAppear
          in={this.props.show}
          timeout={backdropTransitionTimeout}
        >
          {backdrop}
        </Transition>
      );
    }

    return backdrop;
  },

  onShow() {
    let doc = ownerDocument(this);
    let container = getContainer(this.props.container, doc.body);

    // modalManager.add(this, container, this.props.containerClassName);

    this._onFocusinListener = addFocusListener(this.enforceFocus);

    this.focus();
  },

  onHide() {
    // modalManager.remove(this);

    this._onFocusinListener.remove();

    this.restoreLastFocus();
  },

  handleHidden(...args) {
    this.setState({ exited: true });
    this.onHide();

    if (this.props.onExited) {
      this.props.onExited(...args);
    }
  },

  handleBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (this.props.onBackdropClick) {
      this.props.onBackdropClick(e);
    }

    if (this.props.backdrop === true){
      this.props.onHide();
    }
  },

  checkForFocus() {
    if (canUseDom) {
      this.lastFocus = activeElement();
    }
  },

  focus() {
    let autoFocus = this.props.autoFocus;
    let modalContent = this.getDialogElement();
    let current = activeElement(ownerDocument(this));
    let focusInModal = current && contains(modalContent, current);

    if (modalContent && autoFocus && !focusInModal) {
      this.lastFocus = current;

      if (!modalContent.hasAttribute('tabIndex')){
        modalContent.setAttribute('tabIndex', -1);
        warning(false,
          'The modal content node does not accept focus. ' +
          'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');
      }

      modalContent.focus();
    }
  },

  restoreLastFocus() {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  },

  enforceFocus() {
    let { enforceFocus } = this.props;

    if (!enforceFocus || !this.isMounted()) {
      return;
    }

    let active = activeElement(ownerDocument(this));
    let modal = this.getDialogElement();

    if (modal && modal !== active && !contains(modal, active)) {
      modal.focus();
    }
  },

  //instead of a ref, which might conflict with one the parent applied.
  getDialogElement() {
    let node = this.refs.modal;
    return node && node.lastChild;
  }


});


export default BaseModal;

