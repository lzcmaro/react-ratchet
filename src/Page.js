import React from 'react';
import {classesDecorator} from './utils/componentDecorators';
import classnames from 'classnames';
import ratchetUtils from './utils/ratchetUtils';
import PageHeader from './PageHeader';
import PageContent from './PageContent';

@classesDecorator('page')
class Page extends React.Component {
	render() {
		return (
			<div
				{...this.props}
				role='page' 
				className={classnames(ratchetUtils.getClassSet(this.props), this.props.className)}>
				{this.props.children}
			</div>
		)
	}
}

Page.Header = PageHeader;
Page.Content = PageContent;

export default Page;