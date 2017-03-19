import React from 'react';
import { Link } from 'react-router';

class DMCandidateItem extends React.Component {
  constructor(props) {
    super(props);
    this.addCandidateToList = this.addCandidateToList.bind(this);
  }

  callToActionText() {
    const { username, candidates } = this.props;
    if (candidates.includes(username)) {
      return <p className="channel-browse-preview">{ "Added" }</p>;
    } else {
      return <p className="channel-browse-preview-hidden">{ "Add Now" }</p>;
    }
  }

  addCandidateToList(e) {
    e.preventDefault();
    this.props.addToCandidates(this.props.username);
  }

  render() {
    const { username, candidates } = this.props;
    return (
      <li onClick={this.addCandidateToList}>
        <p>{ username }</p>
        { this.callToActionText() }
      </li>
    );
  }
}

export default DMCandidateItem;
