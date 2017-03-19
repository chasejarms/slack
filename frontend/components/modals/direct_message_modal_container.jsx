import React from 'react';
import { connect } from 'react-redux';
import DirectMessageModal from './direct_message_modal';
import { requestDirectMessageCreation } from '../../actions/groups_actions';

const mapStateToProps = ({ users }, { modalOpen, closeModal }) => ({
  users,
  modalOpen,
  closeModal
});

const mapDispatchToProps = dispatch => ({
  requestDirectMessageCreation: group => dispatch(requestDirectMessageCreation(group))
});

export default connect(mapStateToProps, mapDispatchToProps)(DirectMessageModal);
