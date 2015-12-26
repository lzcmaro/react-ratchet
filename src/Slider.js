import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import * as RATCHET from './utils/common';

let getScroll = function (target,transformProperty) {
    var translate3d = target.style[transformProperty].match(/translate3d\(([^,]*)/);
    var ret = translate3d ? translate3d[1] : 0;
    return parseInt(ret, 10);
};

let Slider = React.createClass ({
    propTypes:{
        className : React.PropTypes.string
    },
    _vars:{
        pageX: 0,
        pageY: 0,
        deltaX: 0,
        deltaY: 0,
        offsetX: 0,
        slideNumber: 0,
        lastSlide: 0,
        sliderWidth: 0,
        scrollableArea: 0,
        startTime: 0,
        resistance: 1,
        isScrolling: undefined,
        startedMoving: undefined,
        slider: undefined
    },
    slide(index){
        let slider = ReactDOM.findDOMNode(this).querySelector('.slide-group');
        slider.style[RATCHET.getBrowserCapabilities().prefix + 'transition-duration'] = '0s';
        slider.style[RATCHET.getBrowserCapabilities().transform] = 'translate3d(' + -index * slider.offsetWidth + 'px,0,0)';
        this.props.onSlide&&this.props.onSlide({
            index: Math.abs(index)
        });
    },
    _setSlideNumber(offset){
        let _vars = this._vars;
        let round = offset ? (_vars.deltaX < 0 ? 'ceil' : 'floor') : 'round';
        _vars.slideNumber = Math[round](getScroll(_vars.slider,_vars.transformProperty) / (_vars.scrollableArea / _vars.slider.children.length));
        _vars.slideNumber += offset;
        _vars.slideNumber = Math.min(_vars.slideNumber, 0);
        _vars.slideNumber = Math.max(-(_vars.slider.children.length - 1), _vars.slideNumber);
    },
    _onTouchStart(e){
        let _vars = this._vars;

        let slider = _vars.slider = e.currentTarget;
        let slideItemLen = slider.children.length;

        _vars.sliderWidth    = slider.offsetWidth;
        _vars.scrollableArea = slider.querySelector('.slide').offsetWidth * slideItemLen;
        _vars.lastSlide      = -(slideItemLen - 1);

        _vars.resistance = 1;
        _vars.isScrolling = undefined;

        _vars.startTime = +new Date();
        _vars.pageX = e.touches[0].pageX;
        _vars.pageY = e.touches[0].pageY;
        _vars.deltaX = 0;
        _vars.deltaY = 0;

        _vars.transformPrefix = RATCHET.getBrowserCapabilities().prefix;
        _vars.transformProperty = RATCHET.getBrowserCapabilities().transform;

        this._setSlideNumber(0);
        
        _vars.slider.style[_vars.transformPrefix + 'transition-duration'] = 0;
    },
    _onTouchMove(e){
        if(e.touches.length > 1) {
          return;
        }

        let _vars = this._vars,
            slider = _vars.slider;

        if (!_vars.startedMoving) {
          _vars.pageX += (e.touches[0].pageX - _vars.pageX) - 1;
        }

        _vars.deltaX = e.touches[0].pageX - _vars.pageX;
        _vars.deltaY = e.touches[0].pageY - _vars.pageY;
        _vars.pageX  = e.touches[0].pageX;
        _vars.pageY  = e.touches[0].pageY;

        if (typeof _vars.isScrolling === 'undefined' && _vars.startedMoving) {
          _vars.isScrolling = Math.abs(_vars.deltaY) > Math.abs(_vars.deltaX);
        }

        if (_vars.isScrolling) {
          return;
        }

        _vars.offsetX = (_vars.deltaX / _vars.resistance) + getScroll(slider,_vars.transformProperty);

        e.preventDefault();

        _vars.resistance = _vars.slideNumber === 0 && _vars.deltaX > 0 ? (_vars.pageX / _vars.sliderWidth) + 1.25 :
                 _vars.slideNumber === _vars.lastSlide && _vars.deltaX < 0 ? (Math.abs(_vars.pageX) / _vars.sliderWidth) + 1.25 : 1;

        slider.style[_vars.transformProperty] = 'translate3d(' + _vars.offsetX + 'px,0,0)';
        _vars.startedMoving = true;
    },
    _onTouchEnd(e){
        let _vars = this._vars,
            slider = _vars.slider;

        if (_vars.isScrolling) {
          return;
        }

        _vars.startedMoving = false;

        this._setSlideNumber((+new Date()) - _vars.startTime < 1000 && Math.abs(_vars.deltaX) > 15 ? (_vars.deltaX < 0 ? -1 : 1) : 0);
        _vars.offsetX = _vars.slideNumber * _vars.sliderWidth;

        slider.style[_vars.transformPrefix + 'transition-duration'] = '.2s';
        slider.style[_vars.transformProperty] = 'translate3d(' + _vars.offsetX + 'px,0,0)';

        //fire event
        this.props.onSlide&&this.props.onSlide({
            index: Math.abs(_vars.slideNumber)
        });
    },
    render() {
        let Component = this.props.eleType || 'div';
        
        return (
            <Component 
                {...this.props}
                className = {classNames('slider',this.props.className)}>
                <div 
                    className="slide-group"
                    onTouchStart={this._onTouchStart}
                    onTouchMove={this._onTouchMove}
                    onTouchEnd={this._onTouchEnd}
                >
                    {this.props.children}
                </div>
            </Component>
        )
    }
});

export default Slider;
