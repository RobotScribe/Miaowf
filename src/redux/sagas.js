// @flow
import { all } from 'redux-saga/effects'; // eslint-disable-line
import type { Saga } from 'redux-saga';

import signUpSaga from 'redux/pages/SignUp/sagas';

// single entry point to start all Sagas at once
export default function* rootSaga(): Saga<*> {
  // $FlowFixMe
  yield all([signUpSaga()]);
}
