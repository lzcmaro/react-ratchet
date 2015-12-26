import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function PushSection() {

	return (
		<div>
			{/* Popovers */}
			<ReactPlayground id="push" title='Push' desc='' codeText={Samples.Push} />
		</div>
	);

};