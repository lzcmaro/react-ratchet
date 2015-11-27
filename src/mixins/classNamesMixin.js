import React from 'react';
import classNames from 'classnames';

var classNamesMixin = {
    componentDidMount : function(){
        let dom = React.findDOMNode(this);
        if(this.props.className&&dom.className === this.props.className){
            dom.className ='';
        }
        dom.className = classNames(dom.className,this.props.className);
    }
};

export default classNamesMixin;