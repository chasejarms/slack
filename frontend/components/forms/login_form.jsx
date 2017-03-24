import React from 'react';
import AuthenticationFormContainer from './authentication_form_container';

const LoginForm = () => (
  <AuthenticationFormContainer
    headerValue={"Sign In To QuackChat"}
    buttonValue={"Sign In"}
    actionType={"login"}
    />
);

export default LoginForm;
