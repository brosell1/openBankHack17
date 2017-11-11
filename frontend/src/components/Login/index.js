import React, { Component } from 'react';
import LoginForm from './LoginForm'
import LoginButton from './LogInButton'

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <LoginForm onChange={this.props.onChange}/>
        <LoginButton onClick={this.props.onClick}/>
      </div>
    );
  }
}

export default Login;
