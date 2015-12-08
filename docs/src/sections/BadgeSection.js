import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function BadgeSection() {

    return (
        <div>
            <ReactPlayground id="badges" title='Badges' desc='标记' codeText={Samples.Badge} />
        </div>
    );

};