import React from 'react';
import classNames from 'classnames';

let ListItem = React.createClass({
    propTypes:{
        className: React.PropTypes.string
    },

    getDefaultProps(){
        return {
            divider:false
        }
    },

    render(){
        let Component = this.props.eleType || 'li';
        let itemClass = this.props.divider ? 'table-view-divider' : 'table-view-cell';

        return (
            <Component
                {...this.props}
                className = {classNames(itemClass,this.props.className)}>
                {this.props.children}
            </Component>
        )
    }
});

export default ListItem;