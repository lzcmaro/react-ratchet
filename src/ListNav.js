import React from 'react';
import classNames from 'classnames';

let ListNav = React.createClass({
    propTypes:{
        className: React.PropTypes.string
    },

    getDefaultProps(){
        return {
            left:false,
            right:false
        }
    },

    render(){
        let Component = this.props.eleType || 'a';
        let navLeftClass = 'navigate-left', navRightClass = 'navigate-right';
        let classes={
            [navLeftClass] : this.props.left,
            [navRightClass] : this.props.right
        }

        return (
            <Component
                {...this.props}
                href = {this.props.href || 'javascript:;'}
                className = {classNames(classes,this.props.className)}>
                {this.props.children}
            </Component>
        )
    }
});

export default ListNav;