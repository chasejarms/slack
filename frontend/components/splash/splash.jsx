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
      email: "guest_one@guest_one.com",
      password: "guest_one"
    });
  }

  guestLogInTwo(e) {
    e.preventDefault();
    this.props.login({
      email: "guest_two@guest_two.com",
      password: "guest_two"
    });
  }

  render() {
    const correctForm = this.props.pageType === "signup" ? <SignUpForm /> : <LoginForm />;
    return(
      <div>
        <header className="splash-header">
          <button onClick={this.guestLogInOne}>Guest One Login</button>
          <button onClick={this.guestLogInTwo}>Guest Two Login</button>
        </header>
        { correctForm }
      </div>
    );
  }
}

export default withRouter(Splash);
