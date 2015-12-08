import React from 'react';
import classNames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';
import Icon from './Icon';

let Link = React.createClass ({
	propTypes: {
        href: React.PropTypes.string,
        target: React.PropTypes.string,
        icon: React.PropTypes.string,
        left: React.PropTypes.bool,
        right: React.PropTypes.bool
	},
	getDefaultProps() {
		return{
			ratClass: 'link',
			left: false,
			right: false,
		};
	},

    render() {

        let classes = ratchetUtils.getClassSet( this.props ),
        	iconProps = {ratClass: 'icon', ratStyle: this.props.icon},
        	iconClasses = this.props.icon ? ratchetUtils.getClassSet( iconProps ) : {},
        	leftClass = 'pull-left',
        	rightClass = 'pull-right',
        	href = this.props.href || 'javascript:;';

        Object.assign( classes, iconClasses );

        classes = {
            ...classes,
            [leftClass]: this.props.left,
            [rightClass]: this.props.right
        };

        return (
            <a
                { ...this.props }
                href = { href }
                className = { classNames(classes, this.props.className) }>
                { this.props.children }
            </a>
        )
    }
});

export default Link;