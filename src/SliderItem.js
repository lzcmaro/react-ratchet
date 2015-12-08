import React from 'react';
import classNames from 'classnames';

let SliderItem = React.createClass ({
    propTypes:{
        className : React.PropTypes.string
    },
    render() {
        let Component = this.props.eleType || 'div';
        
        return (
            <Component 
                {...this.props}
                className = {classNames('slide',this.props.className)}>
                    {this.props.children}
            </Component>
        )
    }
});

export default SliderItem;
