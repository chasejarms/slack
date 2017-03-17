import React from 'react';
import ChannelBrowseItem from './channel_browse_item';

const ChannelBrowseList = ({ channels, closeModal }) => (
  <ul className="channel-browse-list">
    {
      channels.map(channel => <ChannelBrowseItem
        key={channel.id}
        channelInfo={channel}
        closeModal={closeModal}
        />)
    }
  </ul>
);

export default ChannelBrowseList;
