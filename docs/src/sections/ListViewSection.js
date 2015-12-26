import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function ListViewSection() {

    return (
        <div>
            <ReactPlayground id="table-views" title='List' desc='列表' codeText={Samples.ListView} />
            <ReactPlayground title='List with chevrons' desc='带V形箭头(chevrons)的列表' codeText={Samples.ListViewWithChevrons} />
            <ReactPlayground title='List with badges' desc='带标记(badges)的列表' codeText={Samples.ListViewWithBadge} />
            <ReactPlayground title='List with badges and chevrons' desc='带V形箭头和标记的列表' codeText={Samples.ListViewWithBadgeAndChevrons} />
            <ReactPlayground title='List with media (icons)' desc='带媒体元素(图标)的列表' codeText={Samples.ListViewWithIconMedia} />
            <ReactPlayground title='List with media (images)' desc='带媒体元素(图片)的列表' codeText={Samples.ListViewWithImgMedia} />
            <ReactPlayground title='List with buttons' desc='带按钮的列表' codeText={Samples.ListViewWithButton} />
            <ReactPlayground title='List with toggles' desc='带开关按钮的列表' codeText={Samples.ListViewWithToggle} />
            <ReactPlayground title='Carded List' desc='卡片式的列表' codeText={Samples.ListViewWithCard} />
        </div>
    );

};