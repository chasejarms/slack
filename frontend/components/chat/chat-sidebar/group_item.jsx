import React from 'react';
import { Link } from 'react-router';

const GroupItem = ({ groupInfo, name }) => (
  <Link to={`/chat/${groupInfo.name}`} className="group-item">
    <li>{name}</li>
  </Link>
);

export default GroupItem;
