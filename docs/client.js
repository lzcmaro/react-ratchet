// import CodeMirror from 'codemirror';
// import 'codemirror/addon/runmode/runmode';
// import 'codemirror/mode/htmlmixed/htmlmixed';
// import './assets/javascript';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import Root from './src/Root';
import routes from './src/Routes';

import '../src/fonts/ratchicons.eot';
import '../src/fonts/ratchicons.svg';
import '../src/fonts/ratchicons.ttf';
import '../src/fonts/ratchicons.woff';

import '../src/sass/ratchet.scss';

// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/solarized.css';
// import './assets/CodeMirror.css';


import './assets/fingerblast.js';
import './assets/docs.js';

import './assets/docs.css';

import './assets/device-sprite.png';
import './assets/slide-1.jpg';
import './assets/slide-2.jpg';
import './assets/slide-3.jpg';
import './assets/favicon.ico';




//global.CodeMirror = CodeMirror;

Root.assetBaseUrl = window.ASSET_BASE_URL;
// Root.propData = window.PROP_DATA;

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} children={routes} />,
  document
);
