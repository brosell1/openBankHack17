import React, { Component } from 'react';
import Notifications from '../Notifications'

class NewAuthLevel extends Component {
  render() {
    return (
      <div className="NewAuthLevel">
          <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="New Authorisation Level"/>
          <input type='text'/>
          <input type='number' />
          <input type='number' />
          <button>Create New Authorization Level</button>
      </div>
    );
  }
}

export default NewAuthLevel;
