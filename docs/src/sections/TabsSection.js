import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function TabsSection() {

    return (
        <div>
            {/*Form element Select*/}
            <ReactPlayground id="tabs" title="Tabs" desc='可滑动的选项卡' codeText={Samples.Tabs} />
        </div>
    );

};