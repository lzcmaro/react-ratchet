import React from 'react';
import classnames from 'classnames';
import NavBar from './NavBar';
import Link from './Link';


let ModalHeader = React.createClass({
  	propTypes: {
		closeButton: React.PropTypes.bool
	},

	getDefaultProps() {
		return { closeButton: true }
	},

	contextTypes: {
		onModalHide: React.PropTypes.func
	},

	render() {
		return (
		  <NavBar
		    {...this.props}
		    className={classnames('modal-header', this.props.className)}>
		    {this.props.closeButton ? this.renderCloseButton() : null}
		    {this.props.children}
		  </NavBar>
		);
	},

	renderCloseButton() {
		return (
			<Link right icon="close" onTouchEnd={this.context.onModalHide || this.props.onHide} />
		)
	}
});

export default ModalHeader;

