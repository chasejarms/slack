import React from 'react';

const IndividualMessage = ({messageInfo}) => (
  <li className="individual-message-container">
    <section className="individual-message-first-line">
      <p className="individual-message-username">{messageInfo.user}</p>
      <span className="individual-message-date">{messageInfo.created_at}</span>
    </section>
    <p className="individual-message-body">{messageInfo.body}</p>
  </li>
);

export default IndividualMessage;
