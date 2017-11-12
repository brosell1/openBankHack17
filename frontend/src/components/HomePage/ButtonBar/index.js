import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  // display: 'flex',
  // 'align-items': 'center',
  // 'flex-direction': 'row',
  // padding: '10'

  display: 'inline-block',
  margin: '.5em auto',
  padding: '5px',
  'margin-right': '50px',
  width: '200px',
  backgroundColor: '#c34433',
}

class ButtonBar extends Component {
  render() {
    return (
      <div className="ButtonBar" style={{'text-align': 'center'}}>
        {/* try make inner text white */}
        <RaisedButton style={styles} disabledLabelColor labelColor='#fff' backgroundColor='#c34433' onClick={()=> this.props.onClick('newBulkTransaction')} label='New Bulk'/>
        <RaisedButton style={styles} backgroundColor='#c34433' disabledLabelColor labelColor='#fff' onClick={()=> this.props.onClick('newBeneficiary')} label='New Beneficiary'/>
        <RaisedButton style={styles} backgroundColor='#c34433' disabledLabelColor labelColor='#fff' onClick={()=> this.props.onClick('newTransaction')} label='New Single' />
        {this.props.isAdmin && <div><RaisedButton style={styles} backgroundColor='#c34433' labelColor="#fff" onClick={()=> this.props.onClick('newTeamMember')} label= 'New Team Member'/> <RaisedButton style={styles} backgroundColor='#c34433' labelColor="#fff" onClick={()=> this.props.onClick('newAuthLevel')} label= 'New Auth Level'/></div>}
      </div>
    );
 }
}

export default ButtonBar;
