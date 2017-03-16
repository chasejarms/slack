import React from 'react';
import { connect } from 'react-redux';
import MessageBody from './message_body';
import { fetchMessages } from '../../../actions/message_actions';

const mapStateToProps = ({currentMessages}) => ({
  currentMessages
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: groupName => dispatch(fetchMessages(groupName))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageBody);
