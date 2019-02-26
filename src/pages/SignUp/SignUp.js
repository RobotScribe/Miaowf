// @flow
import * as React from 'react';

import PageFrame from 'components/PageFrame';

import Style from './SignUp.style';

type PropsType = {
  signUpRequest: (submitData: SubmitDataType) => void,
  error: string,
  success: boolean,
};

type StateType = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  error: ?string,
};

class SignUp extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: null,
    };
  }

  changeFirstName = ({ target: { value } }: { target: { value: string } }) => {
    //TODO use EventType from flow
    this.setState({ firstName: value });
  };

  changeLastName = ({ target: { value } }: { target: { value: string } }) => {
    //TODO use EventType from flow
    this.setState({ lastName: value });
  };

  changeEmail = ({ target: { value } }: { target: { value: string } }) => {
    //TODO use EventType from flow
    this.setState({ email: value });
  };

  changePassword = ({ target: { value } }: { target: { value: string } }) => {
    //TODO use EventType from flow
    this.setState({ password: value });
  };

  submitForm = (event: { preventDefault: () => void }) => {
    //TODO use EventType from flow
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    if (!(firstName && lastName && email && password)) {
      this.setState({ error: 'Please fill all the fields' });
      return;
    } else {
      this.setState({ error: null });
      this.props.signUpRequest({
        firstName,
        lastName,
        email,
        password,
      });
    }
  };

  render() {
    return (
      <PageFrame>
        {!this.props.success ? (
          <Style.Container>
            {this.state.error && <Style.Error>{this.state.error}</Style.Error>}
            {this.props.error && <Style.Error>{this.props.error}</Style.Error>}
            <Style.Form onSubmit={this.submitForm}>
              <Style.Input
                placeholder="first name"
                value={this.state.firstName}
                onChange={this.changeFirstName}
              />
              <Style.Input
                placeholder="last name"
                value={this.state.lastName}
                onChange={this.changeLastName}
              />
              <Style.Input
                placeholder="email"
                value={this.state.email}
                onChange={this.changeEmail}
              />
              <Style.Input
                placeholder="password"
                value={this.state.password}
                onChange={this.changePassword}
                type="password"
              />
              <Style.Submit type="submit">Submit</Style.Submit>
            </Style.Form>
          </Style.Container>
        ) : (
          'Success'
        )}
      </PageFrame>
    );
  }
}

export default SignUp;
