import React, { Component } from 'react';

class LoginButton extends Component {
  render() {
    return (
      <div className="LoginButton">
        <button onClick={this.props.onClick}>login</button>
      </div>
    );
  }
}

export default LoginButton;
