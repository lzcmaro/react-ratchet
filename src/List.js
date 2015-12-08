import React from 'react';
import classNames from 'classnames';

let List = React.createClass({
    propTypes:{
        className: React.PropTypes.string
    },

    render(){
        let Component = this.props.eleType || 'ul';

        return (
            <Component
                {...this.props}
                className = {classNames('table-view',this.props.className)}>
                {this.props.children}
            </Component>
        )
    }
});

export default List;