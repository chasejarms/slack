import React from 'react';
import { connect } from 'react-redux';
import ChatBanner from './chat_banner';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  const username = session.currentUser ? session.currentUser.username : undefined;
  const email = session.currentUser ? session.currentUser.email : undefined;
  return ({
    loggedIn: Boolean(session.currentUser),
    username,
    email
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBanner);
