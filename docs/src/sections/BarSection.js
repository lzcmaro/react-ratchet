import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function BarSection() {

	return (
		<div>
			{/* Title bar */}
			<ReactPlayground id="bars" title='Title bar' desc='Title bars are full width and docked to the top of the viewport.' codeText={Samples.TitleBar} />
			{/* Title bar with buttons */}
			<ReactPlayground title='Title bar with buttons' desc='Buttons in a title bar are left or right aligned and should be used for actions. Use the .pull-right or .pull-left utility classes to float the buttons. Also, be sure to place any floated elements before the title.' codeText={Samples.TitleBarWithButtons} />
			{/* Title bar with icons */}
			<ReactPlayground title='Title bar with icons' desc='Icons can also be used for actions in toolbars. Again, be sure to use utility classes to float the icons into position.' codeText={Samples.TitleBarWithIcons} />
			{/* Title bar with link buttons and icons */}
			<ReactPlayground title='Title bar with link buttons and icons' desc='Link buttons can be used in tool bars to remove the outline. Use these in conjuction with icons to recreate the nav feel from iOS7. Note the use of .btn-nav to bring the buttons a little bit closer to the edge of the viewport.' codeText={Samples.TitleBarWithLinkButtonsAndIcons} />
			{/* Title bar with segmented control */}
			<ReactPlayground title='Title bar with segmented control' desc='Title bars can also house segmented controls. Feel free to add accompanying buttons too. The control will automatically layout itself out correctly.' codeText={Samples.TitleBarWithSegmentedControl} />


			{/* Tab bar */}
			<ReactPlayground title='Tab bar' desc='Use Ratchicons in the .tab-bar to represent different sections of your app.' codeText={Samples.TabBar} />
		    {/* Tab bar(labels only) */}
			<ReactPlayground title='Tab bar(labels only)' desc="If you don't want to use icons, that's okay too. The text will appear larger to use the additional space." codeText={Samples.TabBarLabelsOnly} />
		

			{/* Standard bars */}
			<ReactPlayground title='Standard bars' desc='Standard bars are basic fixed elements that can be positioned in four places. These can be used to house buttons, icons, or segmented controls (see following examples).' codeText={Samples.StandardBars} />
		</div>
	);

};