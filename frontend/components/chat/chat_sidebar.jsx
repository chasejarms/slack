import React from 'react';
import ChatBannerContainer from './chat_banner_container';
import ChannelList from './channel_list';
import DirectMessageList from './direct_message_list';

const ChatSidebar = ({ channels, directMessages }) => {
  return (
    <aside className="chat-sidebar">
      <ChatBannerContainer />
      <ChannelList channels={ channels }/>
      <DirectMessageList directMessages={ directMessages }/>
    </aside>
  );
};

export default ChatSidebar;
