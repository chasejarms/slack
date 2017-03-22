import React from 'react';
import ChatSidebarContainer from './chat-sidebar/chat_sidebar_container';
import Messages from './main-messages/messages';
import Loading from './loading';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.createOpenConnectionWithServer = this.createOpenConnectionWithServer.bind(this);
    this.closePreviousServerConnection = this.closePreviousServerConnection.bind(this);
    this.receiveNewChannels = this.receiveNewChannels.bind(this);
  }

  componentWillMount() {
    window.setTimeout(() => {
      this.props.requestSubscribedGroups().then(resp => this.props.requestGroups());
      this.props.requestMessages(this.props.params.groupName);
      this.props.requestUsers();
    }, 500);
  }

  componentDidMount() {
    this.createOpenConnectionWithServer();
  }

  componentWillUnmount() {
    this.closePreviousServerConnection();
  }

  receiveNewChannels({ group, subscriptions }) {

    // this might cause the creator to get two things added to their state
    const currentUserId = this.props.currentUser.id;

    if (this.props.lastSubscriptionId === group.id) {
      return;
    }

    if (group.channel) {
      this.props.receiveGroup(group);
    } else if (subscriptions.includes(currentUserId)) {
      this.props.receiveGroup(group);
      this.props.receiveNewSubscription(group.id);
    }
  }

  createOpenConnectionWithServer() {
    let that = this;
    window.App.update = window.App.cable.subscriptions.create({
      channel: "UpdateChannel"
    }, {
      connected: () => {},
      disconnected: () => {},
      // implement action creater to run when a new channel
      // or direct message is received
      received: (data) => this.receiveNewChannels(JSON.parse(data.new_group))
    });
  }

  closePreviousServerConnection() {
    window.App.update.unsubscribe();
  }

  render() {
    const { channels } = this.props;
    if (channels.length > 0) {
      return (
        <div className="chat-container">
          <ChatSidebarContainer />
          <Messages />
        </div>
      );
    } else {
      return(
        <Loading />
      );
    }
  }
}

export default Chat;
