import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function FormSection() {

    return (
        <div>
            {/*Form element Select*/}
            <ReactPlayground id="select" title="Select" desc='自定义下拉框' codeText={Samples.Select} />
        </div>
    );

};