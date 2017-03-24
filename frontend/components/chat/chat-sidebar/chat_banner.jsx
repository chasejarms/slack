import React from 'react';
import { withRouter } from 'react-router';
import ChatBannerDropdown from './chat-banner-dropdown';

class ChatBanner extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      downDownVisible: false
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout()
    .then(() => this.props.clearState());
  }

  componentDidUpdate() {
    if (!this.props.loggedIn) {
      this.props.router.push('/login');
    }
  }

  toggleDropDown(e) {
    this.setState({
      dropDownVisible: !this.state.dropDownVisible
    });
  }

  closeDropDown(e) {
    if (this.state.dropDownVisible) {
      this.setState({
        dropDownVisible: false
      });
    }
  }

  render() {
    const { username, email } = this.props;
    const dropDownClass = this.state.dropDownVisible ? "chat-nav-visible" : "chat-nav-hidden";
    return(
      <section className="chat-banner" onClick={this.toggleDropDown}>
        <div className="chat-header-container">
          <h3>QuackChat</h3>
          <span className="fa fa-chevron-down"></span>
        </div>
        <p className="chat-banner-username">{ username }</p>
        <ChatBannerDropdown
          username={username}
          email={email}
          dropDownClass={dropDownClass}
          closeDropDown={this.closeDropDown}
          logout={this.logout}/>
      </section>
    );
  }
}

export default withRouter(ChatBanner);
