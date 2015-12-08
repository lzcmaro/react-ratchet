import React from 'react';
import Samples from '../Samples'
import ReactPlayground from '../ReactPlayground'

export default function ListViewSection() {

    return (
        <div>
            <ReactPlayground id="table-views" title='Table views' desc='表格视图' codeText={Samples.ListView} />
            <ReactPlayground title='Table view with chevrons' desc='带V形箭头(chevrons)的表格视图' codeText={Samples.ListViewWithChevrons} />
            <ReactPlayground title='Table view with badges' desc='带标记(badges)的表格试图' codeText={Samples.ListViewWithBadge} />
            <ReactPlayground title='Table view with badges and chevrons' desc='带V形箭头和标记的表格视图' codeText={Samples.ListViewWithBadgeAndChevrons} />
            <ReactPlayground title='Table view with media (icons)' desc='带媒体元素(图标)的表格试图' codeText={Samples.ListViewWithIconMedia} />
            <ReactPlayground title='Table view with media (images)' desc='带媒体元素(图片)的表格视图' codeText={Samples.ListViewWithImgMedia} />
            <ReactPlayground title='Table view with buttons' desc='带按钮的表格视图' codeText={Samples.ListViewWithButton} />
            <ReactPlayground title='Table view with toggles' desc='带开关按钮的表格视图' codeText={Samples.ListViewWithToggle} />
            <ReactPlayground title='Carded table views' desc='卡片式的表格试图' codeText={Samples.ListViewWithCard} />
        </div>
    );

};