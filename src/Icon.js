import React from 'react';
import classNames from 'classnames';
import {classesDecorator, stylesDecorator} from './utils/componentDecorators';
import ratchetUtils from './utils/ratchetUtils';
import {ICON_STYLES} from './utils/styleMaps';

let Icon = React.createClass ({
    propTypes: {
        href: React.PropTypes.string,
        target: React.PropTypes.string,
        eleType: React.PropTypes.oneOf(['a', 'span'])
    },

    render() {
        let Component = this.props.eleType || 'span';
        let classes = ratchetUtils.getClassSet(this.props);
        let isLink = this.props.eleType==='a' && (this.props.href || this.props.href==='');
        let href = isLink ? this.props.href || 'javascript:;' : null;
        
        return (
            <Component 
                {...this.props}
                href= {isLink ? href : null}
                className = {classNames(classes,this.props.className)}>
            </Component>
        )
    }
});

export default stylesDecorator(ICON_STYLES.values(), classesDecorator('icon',Icon));
