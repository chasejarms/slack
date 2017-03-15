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
    this.clearErrors = this._clearErrors.bind(this);
    this.login = this._login.bind(this);
    this.signUp = this._signUp.bind(this);
  }

  _formatErrors() {
    
    if (this.props.errors.length > 0) {
      return (
        <div className="authentication-errors-container">
          <div className="authentication-errors medium-margin-bottom">
            <p>{ this.props.errors.join(" - ")}</p>
          </div>
        </div>
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
          className="small-margin-bottom"
          type="text"
          name="user[username]"
          onChange={this.handleUsername}
          placeholder="username"
          value={username}
          />
      );
    }
  }

  _clearErrors() {
    this.props.clearErrors();
  }

  _toggleLink() {
    if (this.props.actionType === "signup") {
      return (
        <div>
          <p>
            Already signed up? Log in <Link to="/login" onClick={this.clearErrors}>here</Link>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            Not yet a member? Sign up <Link to="/sign-up" onClick={this.clearErrors}>here</Link>
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
      <div className="authentication-form-container">
        <h1 className="large-margin-bottom">{headerValue}</h1>
        <p className="large-margin-bottom">Enter your <strong>Email Address</strong> and <strong>Password</strong></p>
        { errors }
        <form>
          { usernameInput }
          { usernameInput ? <br /> : undefined }
          <input
            className="small-margin-bottom"
            type="text"
            name="user[email]"
            onChange={this.handleEmail}
            placeholder="you@example.com"
            value={email}
            />
          <br/>
          <input
            className="medium-margin-bottom"
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
            className="medium-margin-bottom"
            />
        </form>
        { linkToggle }
      </div>
    );
  }
}

export default AuthenticationForm;
