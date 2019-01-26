// @flow

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './App';
import configureStore from './redux/store';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/` : '/',
});
const { store, persistor } = configureStore(history);

const rootEl = document.getElementById('root');

if (rootEl) {
  ReactDOM.render(<App history={history} store={store} persistor={persistor} />, rootEl);
}

// $FlowFixMe module object has hot property with webpack
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    if (rootEl) {
      ReactDOM.render(<NextApp history={history} store={store} />, rootEl);
    }
  });
}

// // Display information in console about components re-rendering
// if (process.env.NODE_ENV === 'development') {
//   const { whyDidYouUpdate } = require('why-did-you-update'); // eslint-disable-line global-require
//   // $FlowFixMe this is the right use of why did you update
//   whyDidYouUpdate(React);
// }
