import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function FormSection() {

	return (
		<div>
			{/* Forms */}
			<ReactPlayground id="forms" title='Forms' desc='' codeText={Samples.Forms} />
			
			{/* Form with input group */}
			<ReactPlayground title="Form with input group" codeText={Samples.FormWithInputGroup} />

			{/* Form with input group and labels */}
			<ReactPlayground title="Form with input group and labels" codeText={Samples.FormWithInputGroupAndLabels} />
		</div>
	);

};