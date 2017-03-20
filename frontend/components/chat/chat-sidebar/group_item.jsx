import React from 'react';
import { Link } from 'react-router';

const GroupItem = ({ groupInfo, name, channel }) => {
  const slug = groupInfo.name;
  if (!channel) {
    name = name.split(",").join(", ");
  }
  return(
    <Link to={`/chat/${slug}`} className="group-item">
      <li>{name}</li>
    </Link>
  );
};

export default GroupItem;
