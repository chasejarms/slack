import React from 'react';
import ChannelBrowseItemContainer from './channel_browse_item_container';

const ChannelBrowseList = ({ channels, closeModal }) => (
  <ul className="channel-browse-list">
    {
      channels.map(channel => <ChannelBrowseItemContainer
        key={channel.id}
        channelInfo={channel}
        closeModal={closeModal}
        />)
    }
  </ul>
);

export default ChannelBrowseList;
