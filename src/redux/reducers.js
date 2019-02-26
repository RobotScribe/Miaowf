// @flow
/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers, type Reducer } from 'redux';

import signUpReducer from 'redux/pages/SignUp/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers: { [string]: Reducer<*, *> }) {
  return combineReducers({ ...asyncReducers, signUp: signUpReducer });
}
