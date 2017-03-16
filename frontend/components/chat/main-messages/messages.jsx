import React from 'react';
import MessageBanner from './message_banner';
import MessageBodyContainer from './message_body_container';

const Messages = () => (
  <div>
    <MessageBanner />
    <section className="main-messages">
      <MessageBodyContainer />
    </section>
  </div>
);

export default Messages;
