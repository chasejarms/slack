import React from 'react';
import { Link } from 'react-router';
import GroupItem from './group_item';

const DirectMessageList = ({ directMessages, subscribedGroups }) => {

  let formattedGroups = directMessages.map(message => {
    let name = message.name.length > 10 ? message.name.slice(0,10) : message.name;
    return <GroupItem groupInfo={ message } name={ name } key={ message.id}/>;
  });

  return (
    <section>
      <h5>DIRECT MESSAGES</h5>
      <ul>
        { formattedGroups }
      </ul>
    </section>
  );
};

export default DirectMessageList;
