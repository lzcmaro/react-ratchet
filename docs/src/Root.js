import React from 'react';

const Root = React.createClass({
  statics: {
    /**
     * Get the list of pages that are renderable
     *
     * @returns {Array}
     */
    getPages() {
      return [
        'index.html'
      ];
    }
  },

  childContextTypes: {
    metadata: React.PropTypes.object
  },

  getChildContext() {
    return {metadata: Root.propData};
  },

  render() {
    let browserInitScriptObj = {
      __html: `window.ASSET_BASE_URL = ${JSON.stringify(Root.assetBaseUrl)}`
    };

    let head = {
      __html: `<title>React-Components</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${Root.assetBaseUrl}/assets/bundle.css" rel="stylesheet">
        <link href="${Root.assetBaseUrl}/assets/docs.css" rel="stylesheet">
        <link href="${Root.assetBaseUrl}/assets/favicon.ico?v=2" type="image/x-icon" rel="shortcut icon">`
    };

    return (
      <html>
        <head dangerouslySetInnerHTML={head} />

        <body>
          {this.props.children}

          <script dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src={`${Root.assetBaseUrl}/assets/jquery-1.11.3.min.js`} />
          <script src={`${Root.assetBaseUrl}/assets/docs.js`} />
          <script src={`${Root.assetBaseUrl}/assets/bundle.js`} />
        </body>
      </html>
    );
  }
});


export default Root;
