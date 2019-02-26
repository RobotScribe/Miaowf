// @flow

import { call, put, takeLatest } from 'redux-saga/effects';

import { requestSignUp } from './api';
import { SIGN_UP_START } from './constants';
import { SignUpSuccess, SignUpError } from './actions';

export function* signUp({ payload }: { payload: SubmitDataType }): SagaType {
  try {
    yield call(requestSignUp, payload);
    yield put(SignUpSuccess());
  } catch (error) {
    console.error(error.response.data);
    yield put(SignUpError(error.response.data.error));
  }
}

export default function* signUpSaga(): SagaType {
  yield takeLatest(SIGN_UP_START, signUp);
}
