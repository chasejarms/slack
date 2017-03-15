import React from 'react';
import AuthenticationFormContainer from './authentication_form_container';

const SignUpForm = () => (
  <AuthenticationFormContainer
    headerValue={"Sign Up For Slack"}
    buttonValue={"Sign Up"}
    actionType={"signup"}
    />
);

export default SignUpForm;
