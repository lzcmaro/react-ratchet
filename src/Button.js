import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import Badge from './Badge';
import {classesDecorator, stylesDecorator} from './utils/componentDecorators';
import ratchetUtils from './utils/ratchetUtils';
import {BUTTON_STYLES} from './utils/styleMaps';

let Button = React.createClass ({
	propTypes: {
        block:React.PropTypes.bool,
        href: React.PropTypes.string,
        target: React.PropTypes.string,
        type: React.PropTypes.oneOf(['button', 'reset', 'submit'])
	},
	getDefaultProps() {
		return{
			block:false,
            outlined:false
		};
	},

    render() {
        let classes = ratchetUtils.getClassSet(this.props);
        let blockClass = ratchetUtils.prefix(this.props,'block');
        let outlinedClass = ratchetUtils.prefix(this.props,'outlined');
        let renderFuncName;

        classes = {
            ...classes,
            [blockClass]:this.props.block,
            [outlinedClass]:this.props.outlined
        };

        renderFuncName = this.props.ratStyle === BUTTON_STYLES.LINK || this.props.href === '' || this.props.href || this.props.target ? 'renderAnchor' : 'renderButton';
        return this[renderFuncName](classes);
    },

    renderAnchor(classes){
        let Component = this.props.eleType || 'a';
        let href = this.props.href || 'javascript:;';

        return (
            <Component
                {...this.props}
                href= {href}
                className = {classNames(classes,this.props.className)}>
                {this.props.children}
            </Component>
        )
    },

    renderButton(classes){
        let Component = this.props.eleType || 'button'; 

        return (
            <Component
                {...this.props}
                type={this.props.type || 'button'}
                className = {classNames(classes,this.props.className)}>
                {this.props.children}
            </Component>
        )
    }
});

export default stylesDecorator(BUTTON_STYLES.values(), classesDecorator('btn',Button));