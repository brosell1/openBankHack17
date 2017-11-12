import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class LoginButton extends Component {
  render() {
    return (
      <div className="LoginButton">
        <RaisedButton onClick={this.props.onClick}>Login</RaisedButton>
      </div>
    );
  }
}

export default LoginButton;
