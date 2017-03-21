import React from 'react';
import { connect } from 'react-redux';
import MessageBody from './message_body';
import { fetchMessages, receiveMessage } from '../../../actions/message_actions';

const mapStateToProps = ({currentMessages, subscribedGroups }) => ({
  currentMessages,
  subscribedGroups
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: groupName => dispatch(fetchMessages(groupName)),
  receiveMessage: resp => dispatch(receiveMessage(JSON.parse(resp.message)))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageBody);
