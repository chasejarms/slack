import React from 'react';
import { Link } from 'react-router';
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
    this.toggleUsernameInput = this._toggleUsernameInput.bind(this);
    this.formatErrors = this._formatErrors.bind(this);
    this.toggleLink = this._toggleLink.bind(this);
    this.login = this._login.bind(this);
    this.signUp = this._signUp.bind(this);
  }

  _formatErrors() {
    if (this.props.errors.length > 0) {
      return (
        <p>
          { this.props.errors.map((err, idx) => <li key={idx}>{err}</li>) }
        </p>
      );
    }
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

  _toggleUsernameInput() {
    const {username} = this.state;
    if (this.props.actionType === "signup") {
      return (
        <input
          type="text"
          name="user[username]"
          onChange={this.handleUsername}
          placeholder="username"
          value={username}
          />
      );
    }
  }

  _toggleLink() {
    if (this.props.actionType === "signup") {
      return (
        <div>
          <p>
            Already signed up? Log in <Link to="/login">here</Link>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            Not yet a member? Log in <Link to="/sign-up">here</Link>
          </p>
        </div>
      );
    }
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
    const { email, password } = this.state;
    const currentUser = this.props.currentUser ? this.props.currentUser.username : undefined;
    const usernameInput = this.toggleUsernameInput();
    const linkToggle = this.toggleLink();
    const errors = this.formatErrors();
    return(
      <div>
        <h1>{headerValue}</h1>
        <p>Enter your <span>Email Address</span> and <span>Password</span></p>
        { errors }
        <form>
          { usernameInput }
          { usernameInput ? <br /> : undefined }
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
        { linkToggle }
      </div>
    );
  }
}

export default AuthenticationForm;
