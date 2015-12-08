import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function PopoverSection() {

	return (
		<div>
			{/* Popovers */}
			<ReactPlayground id="popovers" title='Popovers' desc='Popovers are designed to only fire from title bars. Set the value of the title href to the id of a popover, like so:' codeText={Samples.NavPopover} />
		</div>
	);

};