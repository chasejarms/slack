import React from 'react';
import { Link } from 'react-router';

const GroupItem = ({ groupInfo, name }) => (
  <Link to={`/chat/${groupInfo.name}`}>
    <li>{name}</li>
  </Link>
);

export default GroupItem;
