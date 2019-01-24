// @flow
import React from 'react';
import { type Store } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import type { BrowserHistory } from 'history/createBrowserHistory';

import Routes from './routes';

type Props = {
  history: BrowserHistory,
  persistor?: Object,
  store: Store<State, *, *>
};

const App = (props: Props) => (
  <Provider store={props.store}>
    <PersistGate loading={null} persistor={props.persistor}>
      <ConnectedRouter history={props.history}>
        <Route path="/" component={Routes} />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
