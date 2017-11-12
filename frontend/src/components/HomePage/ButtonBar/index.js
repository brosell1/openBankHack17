import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  // display: 'flex',
  // 'align-items': 'center',
  // 'flex-direction': 'row',
  // padding: '10'

  display: 'inline-block',
  padding: '5px',
  'margin-right': '50px',
  width: '200px',
  backgroundColor: '#c34433',
  color: '#fff'
}

class ButtonBar extends Component {
  render() {
    return (
      <div className="ButtonBar">
        {/* try make inner text white */}
        <RaisedButton style={styles} buttonStyles={styles.color} backgroundColor='#c34433' onClick={()=> this.props.onClick('NewTeamMember')}>New Team Member</RaisedButton>
        <RaisedButton style={styles} backgroundColor='#c34433' onClick={()=> this.props.onClick('NewBeneficiary')}>New Beneficiary</RaisedButton>
        <RaisedButton style={styles} backgroundColor='#c34433' onClick={()=> this.props.onClick('newTransaction')}>New Single Transaction</RaisedButton>
        {this.props.isAdmin && <RaisedButton style={styles} backgroundColor='#c34433' onClick={()=> this.props.onClick('newBulkTransaction')}>New Bulk Transaction</RaisedButton>}
      </div>
    );
 }
}

export default ButtonBar;
