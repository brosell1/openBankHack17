import React, { Component } from 'react';
import Notifications from '../Notifications'

class NewTeamMember extends Component {
  render() {
    return (
      <div className="NewTeamMember">
        <Notifications pageTitle="New Team Member"/>
      </div>
    );
  }
}

export default NewTeamMember;
