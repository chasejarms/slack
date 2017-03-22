import React from 'react';
import MessageBannerContainer from './message_banner_container';
import MessageBodyContainer from './message_body_container';

const Messages = () => (
  <div>
    <MessageBannerContainer />
    <section className="main-messages">
      <MessageBodyContainer />
    </section>
  </div>
);

export default Messages;
