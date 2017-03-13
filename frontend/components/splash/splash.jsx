import React from 'react';
import LoginForm from '../forms/login_form';
import SignUpForm from '../forms/signup_form';
import { withRouter } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.guestLogInOne = this.guestLogInOne.bind(this);
    this.guestLogInTwo = this.guestLogInTwo.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.router.push("/chat");
    }
  }

  guestLogInOne(e) {
    e.preventDefault();
    this.props.login({
      username: "guest_one",
      password: "guest_one"
    });
  }

  guestLogInTwo(e) {
    e.preventDefault();
    this.props.login({
      username: "guest_two",
      password: "guest_two"
    });
  }

  render() {
    const correctForm = this.props.pageType === "signup" ? <SignUpForm /> : <LoginForm />;
    return(
      <div>
        <button onClick={this.guestLogInOne}>Guest Login</button>
        <button onClick={this.guestLogInTwo}>Guest Login</button>
        { correctForm }
      </div>
    );
  }
}

export default withRouter(Splash);
