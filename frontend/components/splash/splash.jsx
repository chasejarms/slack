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
    const correctForm = this.props.pageType === "signup" ? <SignUpForm /> : <LoginForm />;
    return(
      <div>
        { correctForm }
      </div>
    );
  }
}

export default Splash;
