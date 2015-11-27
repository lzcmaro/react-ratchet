import React from 'react';
import classNames from 'classnames';

let NavBar = React.createClass ({
	propTypes: {
		
	},
	getDefaultProps() {
		
	},
    render() {
    	let title, children = this.props.children;

    	//从this.props.children取出navbar的title，在渲染时，方便添加特定样式
    	if( children instanceof Array){

    		for (var i = 0; i < children.length; i++) {
    			if( typeof children[i] === 'string' ){
    				title = children[i];
    				children.splice(i, 1);
    				break;
    			}
    			
    		};

    	}else{
    		title = children;
    		children = null;
    	}  	

        return ( 
        	<nav className = {classNames('bar', 'bar-nav', this.props.className)}>
			  { children }
			  <h1 className="title">{ title }</h1>
			</nav>
        )
    }
});

export default NavBar;