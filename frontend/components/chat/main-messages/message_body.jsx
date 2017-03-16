import React from 'react';
import IndividualMessage from './individual_message';
import { withRouter } from 'react-router';
import NewMessageForm from './new_message_form';

class MessageBody extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextState) {
    if (this.props.params.groupName !== nextState.params.groupName) {
      this.props.fetchMessages(nextState.params.groupName);
    }
  }

  render() {
    const { currentMessages } = this.props;
    return(
      <section>
        { currentMessages.map(messageInfo => <IndividualMessage
          messageInfo={messageInfo}
          key={messageInfo.id}
          />)
        }
        <NewMessageForm />
      </section>
    );
  }
}

export default withRouter(MessageBody);
