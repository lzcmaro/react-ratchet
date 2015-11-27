import React from 'react';

import PageHeader from './PageHeader';

import BarSection from './sections/BarSection';
import ButtonSection from './sections/ButtonSection';
import ButtonsWithIconsSection from './sections/ButtonsWithIconsSection';
import ButtonsBadgesSection from './sections/ButtonsBadgesSection';
import BadgeSection from './sections/BadgeSection';
import IconSection from './sections/IconSection';

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
			            	<ButtonSection/>
			            	<ButtonsWithIconsSection/>
			            	<ButtonsBadgesSection/>
			            	<BadgeSection/>
			            	<IconSection/>
			            </div>	
					</div>	
				</div>
			</div>
		)
	}

};

export default HomePage;