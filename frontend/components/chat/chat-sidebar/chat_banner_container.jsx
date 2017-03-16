import React from 'react';
import { connect } from 'react-redux';
import ChatBanner from './chat_banner';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = ({ session }) => {
  const username = session.currentUser ? session.currentUser.username : undefined;
  return ({
    loggedIn: Boolean(session.currentUser),
    username: username
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBanner);
