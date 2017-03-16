import React from 'react';
import MessageBanner from './message_banner';
import MessageBodyContainer from './message_body_container';

const Messages = () => (
  <section className="main-messages">
    <MessageBanner />
    <MessageBodyContainer />
  </section>
);

export default Messages;
