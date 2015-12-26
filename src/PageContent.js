import React from 'react';
import {classesDecorator} from './utils/componentDecorators';
import classnames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';

@classesDecorator('content')
class Content extends React.Component {
	render() {
		return (
			<div
				{...this.props}
				role='content' 
				className={classnames(ratchetUtils.getClassSet(this.props), this.props.className)}>
				{this.props.children}
			</div>
		)
	}
}

export default Content;