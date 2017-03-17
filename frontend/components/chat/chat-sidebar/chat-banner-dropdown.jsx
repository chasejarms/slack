import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class ChatBannerDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickOutside() {
    this.props.closeDropDown();
  }

  render() {
    const { email, username, dropDownClass } = this.props;
    return(
      <section className={`chat-nav ${dropDownClass}`}>
        <ul className="chat-nav-list">
          <li className="chat-nav-list-li">Email: { email }</li>
          <li className="chat-nav-list-li">Username: { username }</li>
          <li onClick={this.props.logout}>Sign Out Of Slack</li>
        </ul>
      </section>
    );
  }
}

export default enhanceWithClickOutside(ChatBannerDropdown);
