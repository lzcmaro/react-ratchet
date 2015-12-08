import React from 'react';
import classnames from 'classnames';
import Button from './Button';


class NavButton extends React.Component {

	propTypes: {
		left: React.PropTypes.bool,
		right: React.PropTypes.bool
	}

	defaultProps: {
		left: false,
		right: false
	}

	render(){
		let className = this.props.className ? this.props.className : '';

		this.props.left && ( className += ' pull-left' );
		this.props.right && ( className += ' pull-right' );

		return (
			<Button { ...this.props } className = { className.trim() }> { this.props.children } </Button>
		)
	}

};

export default NavButton;

