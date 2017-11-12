import React, { Component } from 'react';
import Notifications from '../Notifications';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    padding: '35vh',
    color:'black'
  }
};

class NewTeamMember extends Component {

  render() {
    return (
      <div className="NewTeamMember">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="New Team Member"/>
          <TextField hintText="Email" />
          <TextField hintText="Password" />
          <RaisedButton ladel='Create Team Member' type='checkbox' labelColor='black'/>
      </div>
    );
  }
}

export default NewTeamMember;
