import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function IconSection() {

    return (
        <div>
            <ReactPlayground domId="ratchicons" title='Ratchicons' desc='字符图标' codeText={Samples.Icon} />
        </div>
    );

};