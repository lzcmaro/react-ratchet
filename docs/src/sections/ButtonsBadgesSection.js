import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function ButtonsBadgesSection() {

    return (
        <div>
            <ReactPlayground domId="buttonsBadges" title='Buttons with badges' desc='带标记的按钮' codeText={Samples.ButtonsBadges} />
        </div>
    );

};