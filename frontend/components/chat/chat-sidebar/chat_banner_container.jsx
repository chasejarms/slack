import React from 'react';
import { connect } from 'react-redux';
import ChatBanner from './chat_banner';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatBanner);
