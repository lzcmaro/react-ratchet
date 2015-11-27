import React from 'react';
import classNames from 'classnames';

let Icon = React.createClass ({
    propTypes: {
        href: React.PropTypes.string,
        target: React.PropTypes.string,
        eleType: React.PropTypes.oneOf(['a', 'span'])
    },

    render() {
        let Component = this.props.eleType || 'span';
        let isLink = this.props.eleType==='a' && (this.props.href || this.props.href==='');
        let href = isLink ? this.props.href || 'javascript:;' : null;

        return (
            <Component 
                {...this.props}
                href= {isLink ? href : null}
                className = {classNames('icon',this.props.className)}>
            </Component>
        )
    }
});

export default Icon;
