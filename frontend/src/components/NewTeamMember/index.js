import React, { Component } from 'react';
import Notifications from '../Notifications'

class NewTeamMember extends Component {
  render() {
    return (
      <div className="NewTeamMember">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.handleLogoutClick} pageTitle="New Beneficiary"/>
        <input type='email'/>
        <input type='text'/>
        <button>Create Team Member</button>
      </div>
    );
  }
}

export default NewTeamMember;
