import React from 'react';
import Modal from 'react-modal';
import ChannelBrowseList from './channel_browse_list';
import DMCandidateList from './dm_candidate_list';
import { union, without } from 'lodash';
import CandidateListFormContainer from '../forms/candidate_list_form_container';

class DirectMessageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directMessageCandidates: [],
      candidateErrors: [],
      candidateFilter: ""
    };
    this.inlineStyling = this.inlineStyling.bind(this);
    this.addToCandidates = this.addToCandidates.bind(this);
    this.removeCandidate = this.removeCandidate.bind(this);
    this.updateCandidateFilter = this.updateCandidateFilter.bind(this);
    this.closeModalAndClearInput = this.closeModalAndClearInput.bind(this);
    this.formatAllErrors = this.formatAllErrors.bind(this);
    this.updateCandidateErrors = this.updateCandidateErrors.bind(this);
  }

  updateCandidateFilter(newFilterParameter) {
    this.setState({
      candidateFilter: newFilterParameter
    });
  }

  addToCandidates(candidateUsername) {

    // imposes the max limit of 7 people total (user not included in count)
    if (this.state.directMessageCandidates.length >= 6) {
      this.setState({
        candidateErrors: ["Max limit of six people per direct message has been reached"]
      });
    } else {
      let oldCandidatesAndOneMore = union(this.state.directMessageCandidates, [candidateUsername]);
      this.setState({
        directMessageCandidates: oldCandidatesAndOneMore,
        candidateErrors: []
      });
    }
  }

  removeCandidate(candidateUsername) {
    // work on this when you get back (i.e. deleting something from an array)
    this.setState({
      directMessageCandidates: without(this.state.directMessageCandidates, candidateUsername)
    });
  }

  closeModalAndClearInput(e) {
    if (e) {
      e.preventDefault();
    }
    this.props.closeModal(e);
    this.setState({
      directMessageCandidates: [],
      candidateErrors: [],
      candidateFilter: ""
    });
  }

  inlineStyling() {

    // we use inline styling here to overcome the inline styling this component
    // gives us by default

    return {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 1)',
        zIndex          : 10
      },
      content : {
        position        : 'fixed',
        width           : "100%",
        height          : "100%",
        top             : '0',
        left            : '0',
        right           : '0',
        zIndex          : 11
      }
    };
  }

  formatAllErrors() {
    const { candidateErrors } = this.state;
    if (candidateErrors) {
      return (
        <div className="direct-message-errors">
          <p>{ candidateErrors }</p>
        </div>
      );
    }
  }

  updateCandidateErrors(newError) {
    this.setState({
      candidateErrors: union(this.state.candidateErrors, newError)
    });
  }

  render() {
    const { modalOpen, closeModal, users, requestDirectMessageCreation } = this.props;
    const { directMessageCandidates } = this.state;
    return(
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel=""
        style={this.inlineStyling()}>

      <i className="fa fa-times-circle" onClick={this.closeModalAndClearInput}></i>
      <section className="channel-modal-container">
        <h1>Create A New Direct Message</h1>
        { this.formatAllErrors() }
        <CandidateListFormContainer
          removeCandidate={this.removeCandidate}
          directMessageCandidates={directMessageCandidates}
          updateCandidateFilter={this.updateCandidateFilter}
          closeModalAndClearInput={this.closeModalAndClearInput}
          updateCandidateErrors={this.updateCandidateErrors}
          />
        <DMCandidateList
          candidateFilter={this.state.candidateFilter}
          addToCandidates={this.addToCandidates}
          users={users}
          candidates={this.state.directMessageCandidates}
          />
      </section>

      </Modal>
    );
  }
}

export default DirectMessageModal;
