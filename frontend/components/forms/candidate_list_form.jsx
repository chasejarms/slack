import React from 'react';
import ReactDOM from 'react-dom';
import { isEqual } from 'lodash';

class CandidateListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFilterInput: ""
    };
    this.updateCandidateFilterWithInput = this.updateCandidateFilterWithInput.bind(this);
    this.requestDMCreationAndHandleResponse = this.requestDMCreationAndHandleResponse.bind(this);
    this.removeCurrentCandidate = this.removeCurrentCandidate.bind(this);
    this.scrollToEnd = this.scrollToEnd.bind(this);
    this.autoFocusFilterBox = this.autoFocusFilterBox.bind(this);
  }

  componentDidUpdate({ directMessageCandidates }) {
    // scroll to the end of the form if someone is added or removed from the list
    if (!isEqual(directMessageCandidates, this.props.directMessageCandidates)) {
      this.scrollToEnd();
      this.autoFocusFilterBox();
    }
  }

  removeCurrentCandidate(username) {
    return () => this.props.removeCandidate(username);
  }

  autoFocusFilterBox() {
    const node = ReactDOM.findDOMNode(this.userFilterBox);
    node.focus();
  }

  scrollToEnd() {
    const node = ReactDOM.findDOMNode(this.endOfCandidateContainer);
    node.scrollIntoView({behavior: "smooth" });
  }

  updateCandidateFilterWithInput(e) {
    e.preventDefault();
    this.props.updateCandidateFilter(e.target.value);
    this.setState({
      userFilterInput: e.target.value
    });
  }

  requestDMCreationAndHandleResponse(e) {
    e.preventDefault();
    this.props.requestDirectMessageCreation({
      users: this.props.directMessageCandidates
    }).then(resp => this.props.receiveNewSubscription(resp.group.id))
    .then(() => this.props.closeModalAndClearInput());
  }

  render() {
    const { directMessageCandidates, removeCandidate } = this.props;
    const placeholder = directMessageCandidates.length === 0 ? "Add a user (max 7)" : "";
    return(
      <form className="selected-candidate-form">
        <div className="selected-candidate-container" onClick={this.autoFocusFilterBox}>
          {
            directMessageCandidates.map((candidate, idx) => <li
            key={ idx }
            className="selected-candidate">
            { candidate }
            <i
              onClick={ this.removeCurrentCandidate(candidate)}
              className="fa fa-times"
              >
            </i>
            </li>)
          }
          <input
            type="text"
            placeholder={placeholder}
            autoFocus="autofocus"
            onChange={this.updateCandidateFilterWithInput}
            value={this.state.userFilterBox}
            ref={(el) => { this.userFilterBox = el; }}
            />
          <div ref={(el) => { this.endOfCandidateContainer = el; }}>
          </div>
        </div>
        <input
          type="submit"
          value="GO"
          onClick={this.requestDMCreationAndHandleResponse}/>
      </form>
    );
  }
}

export default CandidateListForm;
