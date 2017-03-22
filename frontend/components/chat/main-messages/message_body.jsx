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
    // to create a connection with the server
    this.createOpenConnectionWithServer = this.createOpenConnectionWithServer.bind(this);
    this.closePreviousServerConnection = this.closePreviousServerConnection.bind(this);
    this._scrollAnchorIsOnScreen = this._scrollAnchorIsOnScreen.bind(this);
    this.resizeIfFirefox = this.resizeIfFirefox.bind(this);
  }

  componentDidMount() {
    this.scrollToBottom();
    this.createOpenConnectionWithServer();
    this.resizeIfFirefox();
  }

  resizeIfFirefox() {
    let isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) {
      $('#new-message-form').addClass('message-form-firefox');
    }
  }

  createOpenConnectionWithServer() {
    let that = this;
    window.App.group = window.App.cable.subscriptions.create({
      channel: "GroupChannel",
      group_name: that.props.params.groupName
    }, {
      connected: () => {},
      disconnected: () => {},
      received: resp => this.props.receiveMessage(resp)
    });
  }

  closePreviousServerConnection() {
    window.App.group.unsubscribe();
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
      this.closePreviousServerConnection();
      this.createOpenConnectionWithServer();
      this.scrollToBottom();
    }
    // handle initial page load after the messages are
    // received (prevFirstMessage is undefined)
    if (!prevFirstMessage || this._scrollAnchorIsOnScreen()) {
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

  _scrollAnchorIsOnScreen() {
    // opportunity to refactor later so there aren't so many requests on the dom
    let newMessageHeight = $($('.individual-message-container').last()[0]).height();
    let windowHeight = $(window).height();
    let anchorPosition = $('.scroll-anchor').offset().top - newMessageHeight;
    return (anchorPosition < windowHeight);
  }
}

export default withRouter(MessageBody);
