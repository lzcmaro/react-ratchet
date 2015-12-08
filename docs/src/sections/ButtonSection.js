import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function ButtonSection() {

	return (
		<div>
			<ReactPlayground id="buttons" title='Buttons' desc='按钮' codeText={Samples.ButtonTypes} />
            <ReactPlayground id="buttonsWithIcons" title='Buttons with icons' desc='带小图标的按钮' codeText={Samples.ButtonsWithIcons} />
            <ReactPlayground id="buttonsBadges" title='Buttons with badges' desc='带标记的按钮' codeText={Samples.ButtonsBadges} />
            <ReactPlayground id="blockButtons" title='Block buttons' desc='大按钮' codeText={Samples.ButtonBlock} />
		</div>
	);

};