import React from 'react';
import NewChannelModal from './new_channel_modal';
import { connect } from 'react-redux';

import { requestGroupCreation } from '../../actions/groups_actions';
import { receiveSubscription } from '../../actions/subscription_actions';

const mapStateToProps = ({ currentMessages }, { modalOpen, closeModal }) => ({
  modalOpen,
  closeModal,
  groupId: currentMessages[0]
});

const mapDispatchToProps = dispatch => ({
  requestGroupCreation: group => dispatch(requestGroupCreation(group)),
  receiveSubscription: id => dispatch(receiveSubscription(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewChannelModal);
