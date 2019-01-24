// @flow
// $FlowFixMe flow is not ready for Suspense or lazy today
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

import LoadingIndicator from './components/LoadingIndicator';

const CreateProfile = lazy(() => import('./pages/CreateProfile'));
const HomePage = lazy(() => import('./pages/HomePage'));

const routes = () => (
  <Suspense fallback={<LoadingIndicator centered />}>
    <Switch>
      {/* TODO: Remove Hack props => <Component {...props} when bumping to react-router v4.4+ */}
      <Route
        exact
        path="/create-profile"
        render={props => <CreateProfile {...props} />}
      />
      <Route exact path="/" render={props => <HomePage {...props} />} />
    </Switch>
  </Suspense>
);

export default routes;
