import React from 'react';

import PageHeader from './PageHeader';

import BarSection from './sections/BarSection';
import SegmentedControlSection from './sections/SegmentedControlSection';
import ListViewSection from './sections/ListViewSection';
import ButtonSection from './sections/ButtonSection';
import ToggleSection from './sections/ToggleSection';
import BadgeSection from './sections/BadgeSection';
import IconSection from './sections/IconSection';
import FormSection from './sections/FormSection';
import ActionSheetSection from './sections/ActionSheetSection';
import SelectSection from './sections/SelectSection';
import ScrollSection from './sections/ScrollSection';
import PopoverSection from './sections/PopoverSection';
import ModalSection from './sections/ModalSection';
import SliderSection from './sections/SliderSection';
import TabsSection from './sections/TabsSection';
import PushSection from './sections/PushSection';
import TypographySection from './sections/TypographySection';
import PageSection from './sections/PageSection';

class HomePage extends React.Component {

	render() {
		return (
			<div>
				<PageHeader title="React Components"/>
				<div className="container">
					<div className="docs-components column-group">
						<div className="device-column column lg-units-5 pull-right">
			                {/* In phone examples */}
			                <div className="device js-device">
			                    <div className="device-content">
			                        <div id="iwindow">
			                            
			                        </div>
			                    </div>
			                </div>
			            </div>


			            <div className="column lg-units-7 docs-content">
			            	{/* sections */}
			            	<PageSection/>
			            	<BarSection/>
			            	<TypographySection/>
			            	<ListViewSection/>
			            	<ButtonSection/>
			            	<SegmentedControlSection/>
			            	<FormSection/>
			            	<ActionSheetSection/>
			            	<SelectSection/>
			            	<ScrollSection/>
			            	<BadgeSection/>
			            	<PopoverSection/>
			            	<ModalSection/>
			            	<ToggleSection/>
			            	<SliderSection/>
			            	<TabsSection/>
			            	<PushSection/>
			            	<IconSection/>
			            </div>	
					</div>	
				</div>
			</div>
		)
	}

};

export default HomePage;