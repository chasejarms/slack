import React from 'react';
import { withRouter } from 'react-router';

class ChatBanner extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  componentDidUpdate() {
    if (!this.props.loggedIn) {
      this.props.router.push('/login');
    }
  }

  render() {
    const { username } = this.props;
    return(
      <section className="chat-banner">
        <h3>Slack</h3>
        <p>{ username }</p>
        <button onClick={this.logout}>Logout</button>
      </section>
    );
  }
}

export default withRouter(ChatBanner);
