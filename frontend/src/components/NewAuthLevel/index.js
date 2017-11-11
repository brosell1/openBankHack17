import React, { Component } from 'react';
import Notifications from '../Notifications'

class NewAuthLevel extends Component {
  render() {
    return (
      <div className="NewAuthLevel">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.handleLogoutClick} pageTitle="New Authorisation Level"/>
      </div>
    );
  }
}

export default NewAuthLevel;
