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
    return(
      <section>
        <h3>App Academy</h3>
        <p>Chase Armstrong</p>
        <button onClick={this.logout}>Logout</button>
      </section>
    );
  }
}

export default withRouter(ChatBanner);
