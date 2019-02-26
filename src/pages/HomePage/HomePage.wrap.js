// @flow
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import HomePage from './HomePage';

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: Dispatch<Action>): Object => ({
  redirectToSignIn: (): Action => dispatch(push('/sign-up')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
