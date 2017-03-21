import React from 'react';
import CandidateListForm from './candidate_list_form';
import { receiveNewSubscription } from '../../actions/subscription_actions';
import { connect } from 'react-redux';
import { requestDirectMessageCreation } from '../../actions/groups_actions';

const lastDMName = directMessages => {
  let lastIndex = directMessages.length - 1;
  return (directMessages[lastIndex] || {}).name;
};

const mapStateToProps = ({ groups: { directMessages }}, { directMessageCandidates}) => ({
  directMessageCandidates,
  lastDMName: lastDMName(directMessages)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveNewSubscription: group => dispatch(receiveNewSubscription(group)),
  updateCandidateFilter: newFilterParameter => ownProps.updateCandidateFilter(newFilterParameter),
  closeModalAndClearInput: e => ownProps.closeModalAndClearInput(e),
  requestDirectMessageCreation: group => dispatch(requestDirectMessageCreation(group)),
  removeCandidate: candidateUsername => ownProps.removeCandidate(candidateUsername)
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateListForm);
