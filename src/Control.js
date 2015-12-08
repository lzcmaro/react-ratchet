import React from 'react';
import classnames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';


const Control = React.createClass({
	
    propTypes: {
        active: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            ratClass: 'control-item',
            active: false
        }
    },

    render() {
    	let activeClass = 'active',
            classes = ratchetUtils.getClassSet( this.props );

        classes[ activeClass ] = this.props.active; 	

        return ( 
        	<a 
              { ...this.props }
              className = { classnames(classes, this.props.className) }>
			  { this.props.children }
			</a>
        )
    }
});

export default Control;