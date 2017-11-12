import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


class LoginForm extends Component {
  render() {
    return (
      <div className="LoginForm">
        <TextField hintText='Username' name='user' onChange={this.props.onChange} />
        <br />
        <TextField type="password" hintText='Password' name='password' onChange={this.props.onChange} />
      </div>
    );
  }
}

export default LoginForm;
