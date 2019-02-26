// @flow

import { connect } from 'react-redux';

import { requestSignUp } from 'redux/pages/SignUp/actions';
import { selectError, selectSuccess } from 'redux/pages/SignUp/selectors';

import SignUp from './SignUp';

const mapStateToProps = (state: State) => ({
  success: selectSuccess(state),
  error: selectError(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): Object => ({
  signUpRequest: (data: SubmitDataType): Dispatch<Action> => dispatch(requestSignUp(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
