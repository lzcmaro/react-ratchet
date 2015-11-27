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
    // Dump out our current props to a global object via a script tag so
    // when initialising the browser environment we can bootstrap from the
    // same props as what each page was rendered with.
    let browserInitScriptObj = {
      __html:
        `window.ASSET_BASE_URL = ${JSON.stringify(Root.assetBaseUrl)};
        // console noop shim for IE8/9
        (function (w) {
          var noop = function () {};
          if (!w.console) {
            w.console = {};
            ['log', 'info', 'warn', 'error'].forEach(function (method) {
              w.console[method] = noop;
            });
         }
        }(window));`
    };

    let head = {
      __html: `<title>React-Components</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/assets/bundle.css" rel="stylesheet">
        <link href="/assets/favicon.ico?v=2" type="image/x-icon" rel="shortcut icon">`
        

    };

    return (
      <html>
        <head dangerouslySetInnerHTML={head} />

        <body>
          {this.props.children}

          <script dangerouslySetInnerHTML={browserInitScriptObj} />

          <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
          <script src="/assets/bundle.js" />
        </body>
      </html>
    );
  }
});


export default Root;
