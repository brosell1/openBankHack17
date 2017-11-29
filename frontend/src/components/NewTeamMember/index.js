import React, { Component } from 'react';

import Notifications from '../Notifications'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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

  constructor(props) {
    super();
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className="NewTeamMember">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="New Team Member"/>
        <div style={containerStyle}>
          <TextField type='email' hintText="Username" style={styles}/>
          <TextField type='password' hintText="Password" style={styles}/>

          <SelectField value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText='Junior'/>
            <MenuItem value={2} primaryText='Boss'/>
            <MenuItem value={3} primaryText='Senior'/>
          </SelectField>
          <Checkbox label="Admin?" style={styles}/>
          <RaisedButton onClick={this.props.handleSnackBar} fullWidth backgroundColor="#c34433" labelColor="#fff" label="Create" style={buttonStyles} />

        </div>
      </div>
    );
  }
}

export default NewTeamMember;
