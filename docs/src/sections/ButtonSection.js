import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function ButtonSection() {

	return (
		<div>
			<ReactPlayground domId="buttons" title='Buttons' desc='按钮演示' codeText={Samples.ButtonTypes} />
		</div>
	);

};