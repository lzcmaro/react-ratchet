import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function SegmentedControlSection() {

	return (
		<div>
			{/* Segmented control */}
			<ReactPlayground id="segmentedControls" title='Segmented control' desc='Content sections that are to be swapped in and out by the controller should all be siblings and have the class .control-content. Then, just give each content section an id and point the link in the segmented control to that id.' codeText={Samples.SegmentedControl} />
		</div>
	);

};