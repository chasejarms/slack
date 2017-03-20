import React from 'react';
import { connect } from 'react-redux';
import DirectMessageModal from './direct_message_modal';

const mapStateToProps = ({ users }, { modalOpen, closeModal }) => ({
  users,
  modalOpen,
  closeModal
});

export default connect(mapStateToProps, undefined)(DirectMessageModal);
