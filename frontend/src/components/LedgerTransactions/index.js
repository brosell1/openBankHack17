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




class LedgerTransactions extends Component {
constructor(props) {
  super(props);
  this.state={transactions:[],style:{fixedHeader: true,
  fixedFooter: true,
  stripedRows: false,
  showRowHover: false,
  selectable: true,
  multiSelectable: false,
  enableSelectAll: false,
  deselectOnClickaway: true,
  showCheckboxes: false,
  height: '200px',
  width: '80vw'}
}
}

componentDidMount() {
  this.fetchTrans(this.props.listId);
}

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  fetchTrans = (ledgerId) => {fetch(`/createrequest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({method: "get", "path": `v1/customer/ledgers/${ledgerId}/entries`, "requestFields": {}})
  }).then((response) => response.json())
  .then(value => {
    console.log(value.payload)
    this.setState({transactions:value.payload});
  })
}

  render() {
    var tableData=this.state.transactions
    return (
      <div className="LedgerTransactions">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="Transactions"/>

        <div style={styles.root}>
        <TransactionListBox listId={this.props.listId}/>

        <br/>
        <Table height={this.state.style.height} fixedHeader={this.state.style.fixedHeader} fixedFooter={this.state.style.fixedFooter} selectable={this.state.style.selectable} multiSelectable={this.state.style.multiSelectable}>
          <TableHeader displaySelectAll={this.state.style.showCheckboxes} adjustForCheckbox={this.state.style.showCheckboxes} enableSelectAll={this.state.style.enableSelectAll}>

            <TableRow>
              <TableHeaderColumn tooltip="Reference">
                Reference
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Transactions sent to following IBAN">Transaction Type</TableHeaderColumn>
              <TableHeaderColumn tooltip="Date of transaction">Date of Transaction</TableHeaderColumn>
              <TableHeaderColumn tooltip="The amount sent from each transaction">Amount</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={this.state.style.showCheckboxes} deselectOnClickaway={this.state.style.deselectOnClickaway} showRowHover={this.state.style.showRowHover} stripedRows={this.state.style.stripedRows}>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.transaction_id}</TableRowColumn>
                <TableRowColumn>{row.ledger_entry_type}</TableRowColumn>
                <TableRowColumn>{row.created_at}</TableRowColumn>
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
