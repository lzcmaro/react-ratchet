import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function SliderSection() {

    return (
        <div>
            <ReactPlayground id="sliders" title='Sliders' desc='滑动控件' codeText={Samples.Sliders} />
        </div>
    );

};