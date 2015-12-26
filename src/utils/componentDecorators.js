/**
 *  componentDecorators 装饰器（ES7）
 */

import {PropTypes} from 'react';

function curry(fn) {
    return (...args) => {
    	let last = args[args.length - 1];
    	//classesDecorator, stylesDecorator可能不是使用注解（ES7装饰器）方式引用，这里作兼容处理
	    if (typeof last === 'function') {
	    	return fn(...args);
	    }
    	return Component => fn(...args, Component);
    }
}

/**
 * 设置Component.proTypes.ratClass 以及 Component.defaultProps.ratClass
 * 兼容ES7 decorator方式调用，见curry()
 */
let classesDecorator = curry((defaultClass, Component) => {
    let propTypes = Component.propTypes || (Component.propTypes = {});
    let defaultProps = Component.defaultProps || (Component.defaultProps = {});

    propTypes.ratClass = PropTypes.string;
    defaultProps.ratClass = defaultClass;

    return Component;
});


/**
 * 设置Component.propTypes的值
 * 兼容ES7 decorator方式调用，见curry()
 */
let stylesDecorator = curry((styles, defaultStyle, Component) => {
    if (typeof defaultStyle !== 'string') {
        Component = defaultStyle;
        defaultStyle = undefined;
    }

    let existing = Component.STYLES || [];
    let propTypes = Component.propTypes || {};

    styles.forEach(style => {
        if (existing.indexOf(style) === -1) {
            existing.push(style);
        }
    });

    //用于后面校验ratStyle的值，它必须是existing里的其中一个值
    let propType = PropTypes.oneOf(existing);

    // expose the values on the propType function for documentation
    Component.STYLES = propType._values = existing;

    Component.propTypes = {
        ...propTypes,
        ratStyle: propType
    };

    //设置defaultProps.ratStyle的值
    if (defaultStyle !== undefined) {
        let defaultProps = Component.defaultProps || (Component.defaultProps = {});
        defaultProps.ratStyle = defaultStyle;
    }

    return Component;
});


export {
	classesDecorator, stylesDecorator
};
