import React from 'react';
import ChatSidebarContainer from './chat_sidebar_container';
import Messages from './messages';

const Chat = () => {
  return (
    <div className="chat-container">
      <ChatSidebarContainer />
      <Messages />
    </div>
  );
};

export default Chat;
