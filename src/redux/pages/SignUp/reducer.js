// @flow
import { SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './constants';

const initialState = {
  success: false,
  error: null,
};

export default function reducer(state: SignUpState = initialState, action: Action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        success: true,
        error: null,
      };
    case SIGN_UP_ERROR:
      return {
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
