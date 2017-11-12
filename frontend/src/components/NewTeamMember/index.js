import React, { Component } from 'react';
import Notifications from '../Notifications'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  display: 'block',
  'margin-bottom': '.5em',
};
const containerStyle = {
  position: 'absolute',
  left: '50%',
  'text-align': 'center',
  top: '50%',
  transform: 'translate(-50%, -50%)'
};
const buttonStyles = {
  'display': 'inline-block',
}

class NewTeamMember extends Component {
  render() {
    return (
      <div className="NewTeamMember">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="New Team Member"/>
        <div style={containerStyle}>
          <TextField type='email' hintText="Username" style={styles}/>
          <TextField type='text' hintText="Password" style={styles}/>
          <Checkbox label="Is he admin?" style={styles}/>
          <RaisedButton fullWidth backgroundColor="#c34433" labelColor="#fff" label="Create" style={buttonStyles} />
        </div>
      </div>
    );
  }
}

export default NewTeamMember;
