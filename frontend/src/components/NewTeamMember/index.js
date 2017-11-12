import React, { Component } from 'react';
import Notifications from '../Notifications'

class NewTeamMember extends Component {
  render() {
    return (
      <div className="NewTeamMember">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="New Team Member"/>
        <input type='email'/>
        <input type='text'/>
        <input type='checkbox' />
        <button>Create Team Member</button>
      </div>
    );
  }
}

export default NewTeamMember;
