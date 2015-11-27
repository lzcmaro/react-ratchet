import React from 'react';
import classNames from 'classnames';

let Badge = React.createClass ({
    render() {
        let Component = this.props.eleType || 'span';

        return (
            <Component 
                {...this.props}
                className={classNames('badge',this.props.className)}>
                {this.props.children}
            </Component>
        )
    }
});

export default Badge;
