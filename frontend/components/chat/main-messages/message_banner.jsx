import React from 'react';
import NewChannelModal from '../../modals/new_channel_modal';

class MessageBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChannelCreator: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showChannelCreator: !this.state.showChannelCreator
    });
  }

  render() {
    return(
      <section className="message-banner">

        <button
          className="solid-button-style green-button"
          onClick={this.toggleModal}
          >
          Create Channel
        </button>

        <NewChannelModal
          modalOpen={this.state.showChannelCreator}
          closeModal={this.toggleModal}
          />
      </section>
    );
  }
}

export default MessageBanner;
