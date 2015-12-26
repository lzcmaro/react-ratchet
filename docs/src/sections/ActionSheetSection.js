import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function ActionSheetSection() {

    return (
        <div>
            {/*Form element Select*/}
            <ReactPlayground id="actionsheet" title="ActionSheet" desc='上拉菜单' codeText={Samples.ActionSheet} />
        </div>
    );

};