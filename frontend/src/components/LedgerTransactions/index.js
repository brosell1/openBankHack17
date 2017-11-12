import React, { Component } from 'react';
import Notifications from '../Notifications';
import TransactionListBox from './TransactionListBox';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  root: {
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'flex-end',
    'flex-direction': 'column',
    padding: '5vh'
  },
  propContainer: {
      width: 200,
      overflow: 'hidden',
      margin: '20px auto 0',
    },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  button: {
    display: 'inline-block',
    padding: '5px',
    'margin-right': '50px',
    width: '200px',
    backgroundColor: '#c34433',
    color: '#fff'
  }
};

const tableData = [
{
  ref: 'Recruitment Fee',
  iban: '471269882531',
  date: '10/11/17',
  amount: '£2375',
},
{
  ref: 'MoT Service',
  iban: '307712546893',
  date: '10/11/17',
  amount: '£230',
},
{
  ref: 'Rent Monthly',
  iban: '254473043288',
  date: '07/11/17',
  amount: '£850',
},
{
  ref: 'Post Office Mail',
  iban: '245614785236',
  date: '06/11/17',
  amount: '£9.50',
},
{
  ref: 'Broadband Monthly',
  iban: '145236982127',
  date: '02/11/17',
  amount: '£45',
},
{
  ref: 'Electricity Bill Monthly',
  iban: '673216334333',
  date: '28/10/17',
  amount: '£173.61',
},
];

class LedgerTransactions extends Component {

  state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '200px',
      width: '80vw'
    };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div className="LedgerTransactions">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="Transactions"/>

        <div style={styles.root}>
        <TransactionListBox />

        <br/>
        <Table height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
          <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>

            <TableRow>
              <TableHeaderColumn tooltip="Reference">
                Reference
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Transactions sent to following IBAN">Recipient IBAN</TableHeaderColumn>
              <TableHeaderColumn tooltip="Date of transaction">Date of Transaction</TableHeaderColumn>
              <TableHeaderColumn tooltip="The amount sent from each transaction">Amount</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.ref}</TableRowColumn>
                <TableRowColumn>{row.iban}</TableRowColumn>
                <TableRowColumn>{row.date}</TableRowColumn>
                <TableRowColumn>{row.amount}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br/>

      </div>
      <div style={{textAlign: 'center'}}>
        <RaisedButton style={styles.button} backgroundColor='#c34433' onClick={() => this.props.onClick('newBulkTransaction')} label='Bulk Transaction' disableLabelColor labelColor="#fff"/>
        <RaisedButton style={styles.button} backgroundColor='#c34433' onClick={() => this.props.onClick('newTransaction')}label='Single Transaction' disableLabelColor labelColor="#fff"/>
      </div>
      </div>
    );
  }
}

export default LedgerTransactions;
