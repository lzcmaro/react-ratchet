import React from 'react';
import classnames from 'classnames';
import {classesDecorator, stylesDecorator} from './utils/componentDecorators';
import ratchetUtils from './utils/ratchetUtils';
import {BAR_STYLES} from './utils/styleMaps';
import NavTitle from './NavTitle';


@stylesDecorator(BAR_STYLES.values(), 'nav')
@classesDecorator('bar')
class NavBar extends React.Component {
	
    render() {
    	let title, 
            children = this.props.children,
            classes = ratchetUtils.getClassSet(this.props),
            child;

        // console.log( "classes", classes );

    	//从this.props.children取出navbar的title，在渲染时，方便添加特定样式
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
            if( typeof children === 'string' ){
                title = children;
                children = null;
            } 		
    	}  	

        return ( 
        	<nav 
              { ...this.props }
              className = { classnames(classes, this.props.className) }>
			  { children }
			  { title ? <NavTitle>{ title }</NavTitle>  : null }
			</nav>
        )
    }
}

NavBar.Title = NavTitle;

export default NavBar;