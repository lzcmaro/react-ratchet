import {PropTypes} from 'react';
import invariant from 'invariant';
import styleMaps from './styleMaps';

function prefix(props = {}, variant) {
    invariant((props.ratClass || '').trim(), 'A `ratClass` prop is required for this component');
    return props.ratClass + (variant ? '-' + variant : '');
}

function getClassSet(props) {
    let classes = {},
    	ratClass = prefix(props),
    	ratStyle = props.ratStyle;

    if (ratClass) {

    	//设置默认的ratClass为true
    	classes[ ratClass ] = true;

        if (ratStyle) {

        	//默认的ratClass是自动配置的
            if (ratStyle.indexOf( ratClass ) === 0) {
                console.error(
                    'ratStyle will automatically prefix custom values with the ratClass, so there is no need to append it manually. (ratStyle: ' + ratStyle + ', ratClass: ' + ratClass + ')'
                );
                classes[ ratStyle ] = true;
            } else {
                classes[ prefix(props, ratStyle) ] = true;
            }
        }
    }

    return classes;
}

export default {
	prefix, getClassSet
}
