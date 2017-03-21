import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

class NewChannelModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newChannelName: "",
      errors: undefined
    };
    this.inlineStyling = this.inlineStyling.bind(this);
    this.handleNewChannel = this.handleNewChannel.bind(this);
    this.handleChannelName = this.handleChannelName.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.closeModalAndClearInput = this.closeModalAndClearInput.bind(this);
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

  handleErrors(errors) {
    this.setState({ errors });
  }

  closeModalAndClearInput() {
    this.setState({
      errors: "",
      newChannelName: ""
    });
    this.props.closeModal();
  }

  handleNewChannel(e) {
    e.preventDefault();
    this.props.requestGroupCreation({
      name: this.state.newChannelName,
      channel: true
    })
    .then(resp => {
      this.props.receiveSubscription(resp.group.id);
      return this.props.router.push(`/chat/${resp.group.name}`);
    })
    .then(() => this.closeModalAndClearInput())
    .fail(err => this.handleErrors(err.responseJSON));
  }

  handleChannelName(e) {
    e.preventDefault();
    this.setState({
      newChannelName: e.target.value
    });
  }

  render() {
    const { modalOpen, closeModal, channels } = this.props;
    const errors = this.state.errors ? <p className="new-channel-errors">{ this.state.errors }</p> : undefined;
    return(
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel=""
        style={this.inlineStyling()}
        className="new-channel-modal">

        <i className="fa fa-times-circle" onClick={this.closeModalAndClearInput}></i>
        <section className="channel-modal-container new-channel-container">
          <h1>Create Your Channel</h1>
          { errors }
          <form>
            <input
              type="text"
              placeholder="My Awesome Channel"
              value={this.state.newChannelName}
              onChange={this.handleChannelName}
              />
            <input value="Create Channel" type="submit" onClick={this.handleNewChannel}/>
          </form>
        </section>
      </Modal>
    );
  }
}

export default withRouter(NewChannelModal);
