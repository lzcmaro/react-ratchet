import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function TypographySection() {

	return (
		<div>
			{/* Popovers */}
			<ReactPlayground id="typography" title='Typography' desc='Use headings and paragraphs to title and describe sections of your app. Apply or wrap elements with .content-padded to give the content space around the screen.' codeText={Samples.Typography} />
		</div>
	);

};