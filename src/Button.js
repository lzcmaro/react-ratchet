import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import Badge from './Badge';

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
        let Component = this.props.eleType || 'a';
        let href = this.props.href || 'javascript:;';
        let hasIcon = !!this.props.icon;
        let hasBadge = !!this.props.badgeText;

        return (
            <Component
                {...this.props}
                href= {href}
                className = {classNames('btn',this.props.className)}>
                {hasIcon ? <Icon className={this.props.icon} /> : null }
                {this.props.children}
                {hasBadge ? <Badge className={this.props.badge}>{this.props.badgeText}</Badge> : null }
            </Component>
        )
    },

    renderButton(){
        let Component = this.props.eleType || 'button';
        let hasIcon = !!this.props.icon;
        let hasBadge = !!this.props.badgeText;

        return (
            <Component
                {...this.props}
                type={this.props.type || 'button'}
                className = {classNames('btn',this.props.className)}>
                {hasIcon ? <Icon className={this.props.icon} /> : null }
                {this.props.children}
                {hasBadge ? <Badge className={this.props.badge}>{this.props.badgeText}</Badge> : null }
            </Component>
        )
    }
});

export default Button;
