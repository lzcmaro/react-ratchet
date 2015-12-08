import React from 'react';
import classNames from 'classnames';

let Card = React.createClass ({

    render() {
        let Component = this.props.eleType || 'div';
        
        return (
            <Component 
                {...this.props}
                className = {classNames('card',this.props.className)}>
                {this.props.children}
            </Component>
        )
    }
});

export default Card;
