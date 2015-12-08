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
import PopoverSection from './sections/PopoverSection';
import ModalSection from './sections/ModalSection';
import SliderSection from './sections/SliderSection';

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
			            	<BarSection/>
			            	<ListViewSection/>
			            	<ButtonSection/>
			            	<SegmentedControlSection/>
			            	<FormSection/>
			            	<BadgeSection/>
			            	<PopoverSection/>
			            	<ModalSection/>
			            	<ToggleSection/>
			            	<SliderSection/>
			            	<IconSection/>
			            </div>	
					</div>	
				</div>
			</div>
		)
	}

};

export default HomePage;