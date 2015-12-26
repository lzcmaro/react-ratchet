import React from 'react';
import classNames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';
import ListItem from './ListItem';

let List = React.createClass({

    getDefaultProps(){
        return {
            ratClass: 'table-view'
        }
    },

    render(){
        return (
            <ul
                {...this.props}
                className = {classNames(ratchetUtils.prefix(this.props) ,this.props.className)}>
                {this.props.children}
            </ul>
        )
    }
});

List.Item = ListItem;

export default List;