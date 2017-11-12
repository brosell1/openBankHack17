import React, { Component } from 'react';

class ButtonBar extends Component {
  render() {
    if(this.props.isAdmin === true){
    return (
      <div className="ButtonBar">
        <button onClick={()=> this.props.onClick('newTeamMember')}>New Team Member</button>
        <button onClick={()=> this.props.onClick('newBeneficiary')}>New Beneficiary</button>
        <button onClick={()=> this.props.onClick('newTransaction')}>New Single Transaction</button>
        <button onClick={()=> this.props.onClick('newBulkTransaction')}>New Bulk Transaction</button>
      </div>
    );
  }
  if(this.props.isAdmin === false){
  return (
    <div className="ButtonBar">
      <button onClick={()=> this.props.onClick('newBeneficiary')}>New Beneficiary</button>
      <button onClick={()=> this.props.onClick('newTransaction')}>New Single Transaction</button>
      <button onClick={()=> this.props.onClick('newBulkTransaction')}>New Bulk Transaction</button>
    </div>
  );
  }
 }
}

export default ButtonBar;
