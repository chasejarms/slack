import React from 'react';
import AuthenticationFormContainer from './authentication_form_container';

const LoginForm = () => (
  <AuthenticationFormContainer
    headerValue={"Sign In To Slack"}
    buttonValue={"Sign In"}
    actionType={"login"}
    />
);

export default LoginForm;
