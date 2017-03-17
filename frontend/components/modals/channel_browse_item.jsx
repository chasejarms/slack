import React from 'react';
import { Link } from 'react-router';

const ChannelBrowseItem = ({channelInfo, closeModal}) => {
  return (
    <Link to={`/chat/${channelInfo.name}` } onClick={closeModal}>
      <li># {channelInfo.name}</li>
    </Link>
  );
};

export default ChannelBrowseItem;
