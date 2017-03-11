import React from 'react';
import ChatBanner from './chat_banner';
import ChannelList from './channel_list';
import DirectMessageList from './direct_message_list';

const ChatSidebar = () => {
  return (
    <aside className="chat-sidebar">
      <ChatBanner />
      <ChannelList />
      <DirectMessageList />
    </aside>
  );
};

export default ChatSidebar;
