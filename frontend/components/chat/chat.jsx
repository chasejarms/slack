import React from 'react';
import ChatSidebar from './chat_sidebar';
import Messages from './messages';

const Chat = () => {
  return (
    <div className="chat-container">
      <ChatSidebar />
      <Messages />
    </div>
  );
};

export default Chat;
