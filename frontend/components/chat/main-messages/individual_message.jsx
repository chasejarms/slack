import React from 'react';

const IndividualMessage = ({messageInfo}) => (
  <li className="individual-message-container">
    <p>{messageInfo.created_at}</p>
    <p>{messageInfo.user}</p>
    <p>{messageInfo.body}</p>
  </li>
);

export default IndividualMessage;
