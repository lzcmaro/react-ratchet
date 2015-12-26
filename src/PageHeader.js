import React from 'react';
import {classesDecorator} from './utils/componentDecorators';
import classnames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';
import NavBar from './NavBar';


@classesDecorator('header')
class PageHeader extends React.Component {
	render() {
		return (
			<div
			  {...this.props}
			  role="header"
			  className={classnames(ratchetUtils.getClassSet(this.props), this.props.className)}
			>
			  {this.props.children}
			</div>
		)
	}
}

export default PageHeader;