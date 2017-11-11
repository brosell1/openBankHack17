import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <div className="LoginForm">
        <input placeholder='Username' name='user' onChange={this.props.onChange} />
        <input placeholder='Password' name='password' onChange={this.props.onChange} />
      </div>
    );
  }
}

export default LoginForm;
