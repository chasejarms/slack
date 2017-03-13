import React from 'react';
import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = ({session}, { pageType }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  pageType
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
