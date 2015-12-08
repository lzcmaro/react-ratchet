import React from 'react';
import classnames from 'classnames';
import {classesDecorator, stylesDecorator} from './utils/componentDecorators';
import ratchetUtils from './utils/ratchetUtils';

@stylesDecorator( ['listview'] )
@classesDecorator( 'form' )
class Form extends React.Component {
	
    render() {	
        let classes = ratchetUtils.getClassSet( this.props );

        return ( 
        	<form 
              { ...this.props }
              className = { classnames(classes, this.props.className) }>
			  { this.props.children }
			</form>
        )
    }
}

export default Form;