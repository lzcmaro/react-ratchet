import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';

let Button = React.createClass ({
	propTypes: {
        href: React.PropTypes.string,
        target: React.PropTypes.string,
        type: React.PropTypes.oneOf(['button', 'reset', 'submit'])
	},
	getDefaultProps() {
		return{
			
		};
	},

    render() {
        let renderFuncName;
        renderFuncName = this.props.href==='' || this.props.href || this.props.target ? 'renderAnchor' : 'renderButton';
        return this[renderFuncName]();
    },

    renderAnchor(){
        let Component = 'a';
        let href = this.props.href || 'javascript:;';
        let isIconButton = !!this.props.icon;

        return (
            <Component
                {...this.props}
                href= {href}
                className = {classNames('btn',this.props.className)}>
                {isIconButton ? <Icon icon={this.props.icon} /> : null }
                {this.props.children}
            </Component>
        )
    },

    renderButton(){
        let Component = 'button';
        let isIconButton = !!this.props.icon;

        return (
            <Component
                {...this.props}
                type={this.props.type || 'button'}
                className = {classNames('btn',this.props.className)}>
                {isIconButton ? <Icon icon={this.props.icon} /> : null }
                {this.props.children}
            </Component>
        )
    }
});

export default Button;
