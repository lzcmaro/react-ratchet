import React from 'react';

let Bar = React.createClass ({
	propTypes: {
		title: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			title: ""
		}
	},
    render() {
        return ( 
        	<header className="bar bar-nav">
			  <h1 className="title">{this.props.title}</h1>
			</header>
        )
    }
});

export default Bar;