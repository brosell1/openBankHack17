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
}

class ButtonBar extends Component {
  render() {
    return (
      <div className="ButtonBar">
        {/* try make inner text white */}
        <RaisedButton style={styles} disabledLabelColor labelColor='#fff' backgroundColor='#c34433' onClick={()=> this.props.onClick('NewTeamMember')} label='New Team Member'/>
        <RaisedButton style={styles} backgroundColor='#c34433' disabledLabelColor labelColor='#fff' onClick={()=> this.props.onClick('NewBeneficiary')} label='New Beneficiary'/>
        <RaisedButton style={styles} backgroundColor='#c34433' disabledLabelColor labelColor='#fff' onClick={()=> this.props.onClick('newTransaction')} label='New Single Transaction' />
        {this.props.isAdmin && <RaisedButton style={styles} backgroundColor='#c34433' onClick={()=> this.props.onClick('newBulkTransaction')}>New Bulk Transaction</RaisedButton>}
      </div>
    );
 }
}

export default ButtonBar;
