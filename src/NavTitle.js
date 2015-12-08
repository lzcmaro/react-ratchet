import React from 'react';
import Icon from './Icon';


let NavTitle = React.createClass({
	
  propTypes: {
    icon: React.PropTypes.string
  },

  render() {	

    return ( 
    	<h1 
        { ...this.props }
        className = "title">
        { this.props.children }
        { this.props.icon ? <Icon ratStyle={this.props.icon}/> : null}
      </h1>
    )
      
  }
});

export default NavTitle;