import React from 'react';
import ChatSidebarContainer from './chat-sidebar/chat_sidebar_container';
import Messages from './main-messages/messages';

const Chat = () => {
  return (
    <div className="chat-container">
      <ChatSidebarContainer />
      <Messages />
    </div>
  );
};

export default Chat;
