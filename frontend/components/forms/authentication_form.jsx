import React from 'react';

class AuthenticationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.authenticationHandler = this.authenticationHandler.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.login = this._login.bind(this);
    this.signUp = this._signUp.bind(this);
  }



  _login() {
    this.props.login({
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    });
  }

  _signUp() {
    this.props.signUp({
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    });
  }

  authenticationHandler(e){
    e.preventDefault();
    if (this.props.actionType === "signup") {
      this.signUp();
    } else {
      this.login();
    }
  }

  handleUsername(e) {
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  }

  handlePassword(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  }

  handleEmail(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }

  render() {
    const { buttonValue, headerValue } = this.props;
    const { username, password, email } = this.state;
    const currentUser = this.props.currentUser ? this.props.currentUser.username : undefined;
    return(
      <div>
        <h3>{ currentUser }</h3>
        <h1>{headerValue}</h1>
        <p>Enter your <span>Email Address</span> and <span>Password</span></p>
        <form>
          <input
            type="text"
            name="user[username]"
            onChange={this.handleUsername}
            placeholder="hireMe"
            value={username}
            />
          <br/>
          <input
            type="text"
            name="user[email]"
            onChange={this.handleEmail}
            placeholder="you@example.com"
            value={email}
            />
          <br/>
          <input
            id="Password"
            type="text"
            name="user[password]"
            onChange={this.handlePassword}
            placeholder="password"
            value={password}
            />
          <br/>
          <input
            type="submit"
            value={buttonValue}
            onClick={this.authenticationHandler}
            />
        </form>
      </div>
    );
  }
}

export default AuthenticationForm;