import React from 'react';
import { connect } from 'react-redux';
import AuthenticationForm from './authentication_form';
import { login, signUp, clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({session}, ownProps) => {
  const { headerValue, buttonValue, actionType} = ownProps;
  return {
    currentUser: session.currentUser,
    errors: session.errors,
    headerValue,
    buttonValue,
    actionType
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signUp: user => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationForm);
