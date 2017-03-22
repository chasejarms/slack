import React from 'react';
import ChatBannerContainer from './chat_banner_container';
import ChannelList from './channel_list';
import DirectMessageList from './direct_message_list';

class ChatSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { channels, directMessages, subscribedGroups } = this.props;
    if (channels.length > 0) {
      return (
        <aside className="chat-sidebar">
          <ChatBannerContainer />
            <div className="groups-overflow-container">
              <ChannelList
                channels={ channels }
                subscribedGroups={ subscribedGroups }
                />
              <DirectMessageList
                directMessages={ directMessages }
                subscribedGroups={ subscribedGroups }
                />
            </div>
        </aside>
      );
    }
  }
}
export default ChatSidebar;
