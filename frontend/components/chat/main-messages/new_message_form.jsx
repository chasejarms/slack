import React from 'react';

class NewMessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      new_message: ""
    };
    this.handleNewMessageInput = this.handleNewMessageInput.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.subscribeToChannel = this.subscribeToChannel.bind(this);
  }

  handleNewMessageInput(e) {
    e.preventDefault();
    this.setState({
      new_message: e.target.value
    });
  }

  handleNewMessage(e) {
    e.preventDefault();
    this.props.createMessage({
      body: this.state.new_message,
      group_id: this.props.firstMessage.group_id
    }).then(() => this.props.scrollToBottom());
    this.setState({
      new_message: ""
    });
  }

  subscribeToChannel(e) {
    e.preventDefault();
    this.props.requestNewSubscription({
      group_id: this.props.firstMessage.group_id
    });
  }

  render() {
    const { isSubscribedToGroup } = this.props;
    if (isSubscribedToGroup) {
      return(
        <div className="new-message-form-container">
            <form className="new-message-form">
              <input
                type="submit"
                onClick={this.handleNewMessage}
                value="+"
                />
              <input
                type="text"
                value={this.state.new_message}
                onChange={this.handleNewMessageInput}
                />
            </form>
        </div>
      );
    } else {
      return (
        <div className="subscribe-channel-button-container">
          <button
            className="green-button subscribe-channel-button"
            onClick={this.subscribeToChannel}
            >Subscribe To This Channel
          </button>
        </div>
      );
    }
  }

}

export default NewMessageForm;
