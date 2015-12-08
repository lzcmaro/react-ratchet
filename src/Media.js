import React from 'react';
import Icon from './Icon';
import classNames from 'classnames';

let Media = React.createClass ({
    propTypes:{
        src: React.PropTypes.string,
        alt: React.PropTypes.string,
        icon: React.PropTypes.string
    },

    render() {
        let Component = this.props.eleType || 'div';
        let Mbody = this.props.mbodyType || 'div';
        let isImg = (this.props.src==''||this.props.src) ? true : false;
        
        return (
            <Component 
                {...this.props}
                className = {classNames('media',this.props.className)}>
                {isImg ? <img src={this.props.src} alt={this.props.alt} className="media-object pull-left" /> : <Icon ratStyle={this.props.icon} className="media-object pull-left" />}
                <Mbody className="media-body">{this.props.children}</Mbody>
            </Component>
        )
    }
});

export default Media;
