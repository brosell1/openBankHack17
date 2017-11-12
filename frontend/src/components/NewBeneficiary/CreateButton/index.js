import React, { Component } from 'react';

class CreateButton extends Component {
  render() {
    return (
      <div className="CreateButton">
        <button onClick={this.props.onClick}>Create Beneficiary</button>
      </div>
    );
  }
}

export default CreateButton;
