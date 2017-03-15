import React from 'react';
import { connect } from 'react-redux';
import ChatSidebar from './chat_sidebar';

const mapStateToProps = ({ groups: { channels, directMessages}, subscribedGroups }) => ({
  channels,
  subscribedGroups,
  directMessages
});

export default connect(mapStateToProps, undefined)(ChatSidebar);
