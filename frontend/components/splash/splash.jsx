import React from 'react';
import LoginForm from '../forms/login_form';
import SignUpForm from '../forms/signup_form';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <div>
        <button onClick={this.logout}>Logout</button>
        <LoginForm />
        <br/>
        <SignUpForm />
      </div>
    );
  }
}

export default Splash;
