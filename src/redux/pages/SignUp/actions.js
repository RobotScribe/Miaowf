// @flow

import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './constants';

export const requestSignUp = (data: SubmitDataType): SignUpStartAction => ({
  type: SIGN_UP_START,
  payload: data,
});

export const SignUpSuccess = (): SignUpSuccessAction => ({
  type: SIGN_UP_SUCCESS,
});

export const SignUpError = (error: string): SignUpErrorAction => ({
  type: SIGN_UP_ERROR,
  payload: error,
});
