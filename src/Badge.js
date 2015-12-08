import React from 'react';
import classNames from 'classnames';
import {classesDecorator, stylesDecorator} from './utils/componentDecorators';
import ratchetUtils from './utils/ratchetUtils';
import {BADGE_STYLES} from './utils/styleMaps';

let Badge = React.createClass ({
    getDefaultProps(){
        return{
            inverted : false
        }
    },

    render() {
        let Component = this.props.eleType || 'span';
        let classes = ratchetUtils.getClassSet(this.props);
        let invertedClass = ratchetUtils.prefix(this.props,'inverted');
        classes={
            [invertedClass] : this.props.inverted,
            ...classes
        }

        return (
            <Component 
                {...this.props}
                className={classNames(classes,this.props.className)}>
                {this.props.children}
            </Component>
        )
    }
});

export default stylesDecorator(BADGE_STYLES.values(), classesDecorator('badge',Badge));
