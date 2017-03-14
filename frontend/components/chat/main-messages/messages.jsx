import React from 'react';
import MessageBanner from './message_banner';
import MessageBody from './message_body';

const Messages = () => (
  <section className="main-messages">
    <MessageBanner />
    <MessageBody />
  </section>
);

export default Messages;
