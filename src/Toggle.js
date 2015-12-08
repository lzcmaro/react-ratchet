import React from 'react';
import classNames from 'classnames';

let Toggle = React.createClass ({
    propTypes:{
        active:React.PropTypes.bool
    },
    render() {
        let Component = this.props.eleType || 'div';
        let classes ={
            active : this.props.active
        };
        
        return (
            <Component 
                {...this.props}
                className = {classNames('toggle',classes,this.props.className)}
                onClick={this.props.onClick}>
                <div className="toggle-handle"></div>
            </Component>
        )
    }
});

export default Toggle;
