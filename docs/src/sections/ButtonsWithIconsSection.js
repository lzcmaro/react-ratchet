import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function ButtonsWithIconsSection() {

    return (
        <div>
            <ReactPlayground domId="buttonsWithIcons" title='Buttons with icons' desc='带小图标的按钮' codeText={Samples.ButtonsWithIcons} />
        </div>
    );

};