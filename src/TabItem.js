import React from 'react';
import classnames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';


const TabItem = React.createClass({
	
    propTypes: {
        active: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            ratClass: 'tab-item',
            active: false
        }
    },

    render() {
    	let title, 
            children = this.props.children,
            child,
            activeClass = 'active',
            classes = ratchetUtils.getClassSet( this.props );

        classes[ activeClass ] = this.props.active;

    	//从this.props.children取出tab-item的label，在渲染时，方便添加特定样式
    	if( Array.isArray(children) ){

    		for (var i = 0; i < children.length; i++) {
                child = children[i];
                
    			if( typeof child === 'string' ){
    				title = child;
                    children.splice(i, 1);
                    break;
    			}		
    		};

    	}else{
            //子节点只有一个的时候，且是string，把它设为title
            if( typeof children === "string" ){
                title = children;
                children = null;
            }
    	} 	

        return ( 
        	<a 
              { ...this.props }
              className = { classnames(classes, this.props.className) }>
			  { children }
			  { title ? <span className="tab-label">{ title }</span> : null }
			</a>
        )
    }
});

export default TabItem;