import React from 'react';
import BaseModal from './BaseModal';
import Fade from './Fade';

import classnames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';


let NavPopover = React.createClass({

  displayName: 'NavPopover',

  propTypes: {
    ...BaseModal.propTypes,

    /**
     * Open and close the Modal with a slide and fade animation.
     */
    animation: React.PropTypes.bool,

    /**
     * When `true` The modal will show itself.
     */
    show: React.PropTypes.bool,

    /**
     * A callback fired when the header closeButton or non-static backdrop is
     * clicked. Required if either are specified.
     */
    onHide: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      ...BaseModal.defaultProps,
      ratClass: 'popover',
      animation: true
    };
  },

  render() {

    let {
      children
      , animation
      , ...props } = this.props;

    let popoverStyles = {...this.props.popoverStyle, display: 'block'};
    let inClass = { in: props.show && !animation };

    return (

      <BaseModal
        {...this.props}
        show={props.show}
        ref={ref => {
          this._wrapper = (ref && ref.refs.modal);
          this._backdrop = (ref && ref.refs.backdrop);
        }}
        onEntering={this._onShow}
        onExited={this._onHide}
        backdropClassName={classnames(ratchetUtils.prefix(props, 'backdrop'), inClass)}
        containerClassName={ratchetUtils.prefix(props, 'open')}
        transition={animation ? Fade : undefined}
        dialogTransitionTimeout={300}
        backdropTransitionTimeout={150}
      >
        <div className="popover" style={ popoverStyles }>
          <div className="popover-content">{ children }</div>
        </div>
      </BaseModal>

    )
  },

  _onShow(...args) {
    if (this.props.onEntering) {
      this.props.onEntering(...args);
    }
  },

  _onHide(...args) {
    if (this.props.onExited) {
      this.props.onExited(...args);
    }
  }

});

export default NavPopover;

