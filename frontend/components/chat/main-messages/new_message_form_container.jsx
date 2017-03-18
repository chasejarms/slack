import React from 'react';
import { connect } from 'react-redux';
import NewMessageForm from './new_message_form';
import { createMessage } from '../../../actions/message_actions';
import { requestNewSubscription } from '../../../actions/subscription_actions';

const mapStateToProps = ({ currentMessages }, { scrollToBottom, isSubscribedToGroup }) => ({
  firstMessage: currentMessages[0],
  scrollToBottom,
  isSubscribedToGroup
});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message)),
  requestNewSubscription: groupId => dispatch(requestNewSubscription(groupId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageForm);
