import React from 'react';
import { Link } from 'react-router';

const ChannelBrowseItem = ({channelInfo, closeModal, subscribedGroups }) => {

  let channelText;

  if (subscribedGroups.includes(channelInfo.id)) {
    channelText = <p className="channel-browse-preview">{ "subscribed" }</p>;
  } else {
    channelText = <p className="channel-browse-preview-hidden">{ "preview" }</p>;
  }

  return (
    <Link to={`/chat/${channelInfo.name}` } onClick={closeModal}>
      <li>
        <p># {channelInfo.name}</p>
        { channelText }
      </li>
    </Link>
  );
};

export default ChannelBrowseItem;
