// @flow

export type SubmitDataType = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};

export type SignUpStartAction = {
  type: 'SIGN_UP_START',
  payload: SubmitDataType,
};

export type SignUpSuccessAction = {
  type: 'SIGN_UP_SUCCESS',
};

export type SignUpErrorAction = {
  type: 'SIGN_UP_ERROR',
  payload: string,
};

export type SignUpState = {
  success: boolean,
  error: ?string,
};

export type SignUpAction = SignUpStartAction | SignUpSuccessAction | SignUpErrorAction;
