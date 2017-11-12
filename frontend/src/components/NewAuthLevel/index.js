import React, { Component } from 'react';
import Notifications from '../Notifications'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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

class NewAuthLevel extends Component {
  render() {
    return (
      <div className="NewAuthLevel">
          <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="New Authorisation Level"/>
          <div style={containerStyle}>
            <TextField type='text' hintText="Auth Level Name" style={styles}/>
            <TextField type='number' hintText="Max Transactions" style={styles}/>
            <TextField type='number' hintText="Max Transaction Amount" style={styles}/>
            <RaisedButton onClick={this.props.handleSnackBar} fullWidth backgroundColor='#c34433' labelColor='#fff' label="Create" style={buttonStyles} />
          </div>
      </div>
    );
  }
}

export default NewAuthLevel;
