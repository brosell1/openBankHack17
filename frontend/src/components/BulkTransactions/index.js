import React, { Component } from 'react';
import Notifications from '../Notifications'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  'width': '90%',
  'display': 'block',
  'margin': 'auto',
  'margin-bottom': '1em',
  'background': '#f5f5f5'
}

class BulkTransactions extends Component {
  // constructor
  render() {
    return (
      <div className="BulkTransactions">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="Bulk Transactions"/>
        <div style={{'text-align': 'center', 'padding': '2em'}}>
          <input type='file' multiple style={{'margin-bottom': '1em'}}/>
          <TextField multiline={true} rows={15} hintText="" style={style}/>
          <RaisedButton backgroundColor='#c34433' labelColor='#fff' label="Approve"/>
        </div>
      </div>
    );
  }
}

export default BulkTransactions;
