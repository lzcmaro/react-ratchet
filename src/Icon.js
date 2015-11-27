import React from 'react';
import classNames from 'classnames';

let Icon = React.createClass ({
    render() {
        return (
            <span className={classNames('icon',this.props.icon)}></span>
        )
    }
});

export default Icon;
