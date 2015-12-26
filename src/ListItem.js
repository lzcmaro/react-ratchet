import React from 'react';
import classNames from 'classnames';
import Link from './Link';

let ListItem = React.createClass({
    propTypes:{
        divider: React.PropTypes.bool,
        navigate: React.PropTypes.bool
    },

    getDefaultProps(){
        return {
            divider: false,
            navigate: false
        }
    },

    render(){
        let {divider, navigate, children, href, push, ...other} = this.props;
        let navigateClass = 'navigate-right';
        let itemClass = divider ? 'table-view-divider' : 'table-view-cell';

        return (
            <li
                {...other}
                className = {classNames(itemClass, this.props.className)}>
                { navigate || href || push ? <Link className={navigate ? navigateClass : ''} href={href} push={push}>{children}</Link> : children }
            </li>
        )
    }
});

export default ListItem;