import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function ToggleSection() {

    return (
        <div>
            <ReactPlayground id="toggles" title='Toggles' desc='开关按钮' codeText={Samples.Toggle} />
        </div>
    );

};