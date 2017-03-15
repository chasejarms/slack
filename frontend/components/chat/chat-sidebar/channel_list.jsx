import React from 'react';
import GroupItem from './group_item';

const ChannelList = ({ channels, subscribedGroups }) => {
  let channelCount = 0;
  channels.forEach(channel => channelCount ++);
  return (
    <section>
      <h5>Channels ({channelCount})</h5>
      <ul>
        {
          channels.filter(channel => subscribedGroups.includes(channel.id) )
          .map(channel => <GroupItem groupInfo={ channel } key={ channel.id }/>)
        }
      </ul>
    </section>
  );
};

export default ChannelList;
