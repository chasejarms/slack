import React from 'react';
import GroupItem from './group_item';

const ChannelList = ({ channels, subscribedGroups }) => {
  let channelCount = 0;
  channels.forEach(channel => channelCount ++);

  let formattedChannels = channels.filter(channel => {
    return subscribedGroups.includes(channel.id);
  }).map(channel => <GroupItem
    groupInfo={ channel }
    key={ channel.id }
    name={ channel.name.length > 10 ? channel.name.slice(0,10) : channel.name }
    />);

  return (
    <section>
      <h5>Channels ({channelCount})</h5>
      <ul>
        { formattedChannels }
      </ul>
    </section>
  );

  //comment
};

export default ChannelList;
