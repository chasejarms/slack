import React from 'react';
import ChatSidebar from './chat_sidebar';
import Messages from './messages';

const Chat = () => {
  return (
    <div className="chat-container">
      <button onClick={this.logout}>Logout</button>
      <ChatSidebar />
      <Messages />
    </div>
  );
};

export default Chat;
