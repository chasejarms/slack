import React from 'react';
import IndividualMessage from './individual_message';
import { withRouter } from 'react-router';
import NewMessageFormContainer from './new_message_form_container';
import ReactDOM from 'react-dom';

class MessageBody extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.isSubscribedToGroup = this.isSubscribedToGroup.bind(this);
  }

  componentWillReceiveProps(nextState) {
    const changedPath = this.props.params.groupName !== nextState.params.groupName;
    if (changedPath) {
      this.props.fetchMessages(nextState.params.groupName);
    }
  }

  componentDidUpdate(prevProps) {
    const prevFirstMessage = prevProps.currentMessages[0];
    const currentFirstMessage = this.props.currentMessages[0];
    const generalGroup = this.props.params.groupName === "General";

    // handles change between groups

    if (prevFirstMessage && prevFirstMessage !== currentFirstMessage) {
      this.scrollToBottom();
    }

    // handle initial page load after the messages are
    // received (prevFirstMessage is undefined)

    if (!prevFirstMessage) {
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({behavior: "smooth"});
  }

  isSubscribedToGroup() {
    if (this.props.currentMessages.length === 0) {
      return undefined;
    }

    const groupId = this.props.currentMessages[0].group_id;

    return this.props.subscribedGroups.includes(groupId);

  }

  render() {
    const { currentMessages } = this.props;
    return(
      <section className="message-body-container">
        { currentMessages.map(messageInfo => <IndividualMessage
          messageInfo={messageInfo}
          key={messageInfo.id}
          />)
        }
        <div
          className="scroll-anchor"
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
        <NewMessageFormContainer
          scrollToBottom={this.scrollToBottom}
          isSubscribedToGroup={this.isSubscribedToGroup()}
          />
      </section>
    );
  }
}

export default withRouter(MessageBody);
