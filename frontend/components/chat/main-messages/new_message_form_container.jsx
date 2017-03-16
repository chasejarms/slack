import React from 'react';
import { connect } from 'react-redux';
import NewMessageForm from './new_message_form';
import { createMessage } from '../../../actions/message_actions';

const mapStateToProps = ({ currentMessages }, { scrollToBottom }) => ({
  firstMessage: currentMessages[0],
  scrollToBottom
});

const mapDispatchToProps = dispatch => ({
  createMessage: message => dispatch(createMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageForm);
