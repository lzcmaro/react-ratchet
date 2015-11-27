import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Root from './Root';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
