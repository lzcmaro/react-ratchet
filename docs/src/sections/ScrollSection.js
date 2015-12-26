import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function ScrollSection() {

    return (
        <div>
            {/*Scroll*/}
            <ReactPlayground id="scroll" title="Scroll" desc='滚动加载' codeText={Samples.Scroll} />

            {/*下拉刷新*/}
            <ReactPlayground title="Scroll refresh" desc='下拉刷新' codeText={Samples.ScrollRefresh} />
        </div>
    );

};