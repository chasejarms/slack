import React from 'react';
import ChatSidebarContainer from './chat-sidebar/chat_sidebar_container';
import Messages from './main-messages/messages';
import Loading from './loading';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.setTimeout(() => {
      this.props.requestSubscribedGroups().then(resp => this.props.requestGroups());
      this.props.requestMessages(this.props.params.groupName);
      this.props.requestUsers();
    }, 500);
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
