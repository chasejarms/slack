import React from 'react';
import ChatBannerContainer from './chat_banner_container';
import ChannelList from './channel_list';
import DirectMessageList from './direct_message_list';

const ChatSidebar = () => {
  return (
    <aside className="chat-sidebar">
      <ChatBannerContainer />
      <ChannelList />
      <DirectMessageList />
    </aside>
  );
};

export default ChatSidebar;
