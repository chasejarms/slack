import React from 'react';
import { withRouter } from 'react-router';

class ChatBanner extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      downDownVisible: false
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  logout() {
    this.props.logout();
  }

  componentDidUpdate() {
    if (!this.props.loggedIn) {
      this.props.router.push('/login');
    }
  }

  toggleDropDown(e) {
    let clickedDropdown = e.target.className === "chat-nav-list" ||
      e.target.className === "chat-nav-list-li";
    if (!(clickedDropdown && this.state.dropDownVisible)) {
      this.setState({
        dropDownVisible: !this.state.dropDownVisible
      });
    }
  }

  render() {
    const { username, email } = this.props;
    const dropDownClass = this.state.dropDownVisible ? "chat-nav-visible" : "chat-nav-hidden";
    return(
      <section className="chat-banner" onClick={this.toggleDropDown} tabIndex="0" onBlur={this.toggleDropDown}>
        <div className="chat-header-container">
          <h3>Slack</h3>
          <span className="fa fa-chevron-down"></span>
        </div>
        <p className="chat-banner-username">{ username }</p>
        <section className={`chat-nav ${dropDownClass}`}>
          <ul className="chat-nav-list">
            <li className="chat-nav-list-li">Email: { email }</li>
            <li className="chat-nav-list-li">Username: { username }</li>
            <li onClick={this.logout}>Sign Out Of Slack</li>
          </ul>
        </section>
      </section>
    );
  }
}

export default withRouter(ChatBanner);
