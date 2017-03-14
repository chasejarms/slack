import React from 'react';
import { connect } from 'react-redux';
import ChatSidebar from './chat_sidebar';
import { RequestGroups } from '../../actions/groups_actions';

const mapStateToProps = ({ groups: { channels, directMessages} }) => ({
  channels,
  directMessages
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatSidebar);
