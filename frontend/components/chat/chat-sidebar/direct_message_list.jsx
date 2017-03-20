import React from 'react';
import { Link } from 'react-router';
import GroupItem from './group_item';
import DirectMessageModalContainer from '../../modals/direct_message_modal_container';

class DirectMessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directMessageModal: false
    };
    this.toggleDirectMessageModal = this.toggleDirectMessageModal.bind(this);
  }

  toggleDirectMessageModal(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      directMessageModal: !this.state.directMessageModal
    });
  }

  render() {
    const { directMessages, subscribedGroups } = this.props;

    let formattedGroups = directMessages.map(message => {
      let name = message.name.length > 20 ? `${message.name.slice(0,20)}...` : message.name;
      return <GroupItem groupInfo={ message } name={ name } key={ message.id} channel={false}/>;
    });

    return (
      <section>
        <a
          className="direct-message-and-plus"
          onClick={this.toggleDirectMessageModal}
          >
          <h5>DIRECT MESSAGES</h5>
          <i className="fa fa-plus-circle"></i>
        </a>
        <ul>
          { formattedGroups }
        </ul>
        <DirectMessageModalContainer
          modalOpen={this.state.directMessageModal}
          closeModal={this.toggleDirectMessageModal}
          />
      </section>
    );
  }
}

export default DirectMessageList;
