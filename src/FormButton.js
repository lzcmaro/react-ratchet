import React from 'react';
import Button from './Button';


class FormButton extends React.Component {
	
    render() {	
        let {children, value, ...other} = this.props;
        let val = children ? children : value;

        return (
          <Button { ...other } eleType="input" ref="input" key="input" value={ val } />
        )
    }
}

export default FormButton;