import React from 'react';
import classnames from 'classnames';
import {classesDecorator} from './utils/componentDecorators';
import ratchetUtils from './utils/ratchetUtils';


@classesDecorator('input-group')
class InputGroup extends React.Component {
	render() {
		return (
			<div 
				{...this.props}
				className={classnames(ratchetUtils.getClassSet(this.props), this.props.className)}>
				{this.props.children}
			</div>
		)
	}
}

export default InputGroup;