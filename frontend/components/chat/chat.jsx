import React from 'react';
import ChatSidebarContainer from './chat-sidebar/chat_sidebar_container';
import Messages from './main-messages/messages';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestGroups();
    this.props.requestSubscribedGroups();
    this.props.requestMessages(this.props.params.groupName);
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
        <div>Not yet loaded</div>
      );
    }
  }
}

export default Chat;
