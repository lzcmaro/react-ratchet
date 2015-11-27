import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function BarSection() {

	return (
		<div>
			<ReactPlayground domId="bars" title='Title Bar' desc='Title bars are full width and docked to the top of the viewport.' codeText={Samples.TitleBar} />
		</div>
	);

};