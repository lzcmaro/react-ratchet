import React from 'react';

const PageHeader = React.createClass({
  render() {
    return (
        <div className="docs-sub-header">
          <header className="docs-masthead clearfix">
              <div className="container">
                  <div className="column">
                      <h1 className="docs-title">
                          {this.props.title}
                      </h1>
                  </div>
              </div>
          </header>
      
          <div className="docs-component-toolbar js-docs-component-toolbar">
              <div className="container">
                  <div className="column units-2">
                      <span className="docs-jump-menu pull-left js-jump-menu">
                          <span className="icon icon-list"></span> Jump to
                      <span className="icon icon-caret"></span>
                      </span>
                      <div className="docs-component-group js-component-group">
                          <a data-ignore="push" href="#bars" className="docs-component-item">Bars</a>
                          <a data-ignore="push" href="#typography" className="docs-component-item">Typography</a>
                          <a data-ignore="push" href="#table-views" className="docs-component-item">List</a>
                          <a data-ignore="push" href="#buttons" className="docs-component-item">Buttons</a>
                          <a data-ignore="push" href="#segmentedControls" className="docs-component-item">Segmented controls</a>
                          <a data-ignore="push" href="#badges" className="docs-component-item">Badges</a>
                          <a data-ignore="push" href="#forms" className="docs-component-item">Forms</a>
                          <a data-ignore="push" href="#actionsheet" className="docs-component-item">ActionSheet</a>
                          <a data-ignore="push" href="#select" className="docs-component-item">Select</a>
                          <a data-ignore="push" href="#scroll" className="docs-component-item">Scroll</a>
                          <a data-ignore="push" href="#toggles" className="docs-component-item">Toggles</a>
                          <a data-ignore="push" href="#popovers" className="docs-component-item">Popovers</a>
                          <a data-ignore="push" href="#modals" className="docs-component-item">Modals</a>
                          <a data-ignore="push" href="#sliders" className="docs-component-item">Sliders</a>
                          <a data-ignore="push" href="#tabs" className="docs-component-item">Tabs</a>
                          <a data-ignore="push" href="#push" className="docs-component-item">Push</a>
                          <a data-ignore="push" href="#ratchicons" className="docs-component-item">Ratchicons</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

export default PageHeader;