import React from 'react';
import GroupItem from './group_item';

const ChannelList = ({ channels }) => (
  <section>
    <h5>Channels (12)</h5>
    <ul>
      { channels.map(channel => <GroupItem groupInfo={ channel } key={ channel.id }/>) }
    </ul>
  </section>
);

export default ChannelList;
