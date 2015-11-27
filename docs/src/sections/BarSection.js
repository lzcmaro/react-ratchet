import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function BarSection() {

	return (
		<div>
			{/* Title bar */}
			<ReactPlayground domId="bars" title='Title bar' desc='Title bars are full width and docked to the top of the viewport.' codeText={Samples.TitleBar} />
			{/* Title bar with buttons */}
			<ReactPlayground title='Title bar with buttons' desc='Buttons in a title bar are left or right aligned and should be used for actions. Use the .pull-right or .pull-left utility classes to float the buttons. Also, be sure to place any floated elements before the title.' codeText={Samples.TitleBarWithButtons} />
			{/* Title bar with icons */}
			<ReactPlayground title='Title bar with icons' desc='Icons can also be used for actions in toolbars. Again, be sure to use utility classes to float the icons into position.' codeText={Samples.TitleBarWithIcons} />
		</div>
	);

};