import React, {Component} from 'react';
import Notifications from '../Notifications'
import AccountsBox from './AccountsBox';
import ButtonBar from './ButtonBar';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
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
    margin: '20px auto 0'
  },
  propToggleHeader: {
    margin: '20px auto 10px'
  }
};

const tableData = [
  {
    bank: 'Example Bank',
    iban: '453216874333',
    balance: '£25,142'
  }, {
    bank: 'Example Bank',
    iban: '124532784114',
    balance: '£61,344'
  }, {
    bank: 'Example Bank',
    iban: '785415233652',
    balance: '£12,354'
  }, {
    bank: 'Example Bank',
    iban: '654122317251',
    balance: '£2,522'
  }, {
    bank: 'Example Bank',
    iban: '355212649727',
    balance: '£9,421'
  }
];

class HomePage extends Component {

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
      <div className="HomePage">
        <Notifications handleReturn={this.props.handleReturn} handleLogoutClick={this.props.handleLogoutClick} pageTitle="Home"/>
        <div style={styles.root}>
          <AccountsBox/>
          <br/>
          <Table height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
            <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>

              <TableRow>
                <TableHeaderColumn tooltip="The Name of Bank">
                  Name of Bank
                </TableHeaderColumn>
                <TableHeaderColumn tooltip="The International Bank Account Number">IBAN</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Current Balance">Balance</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{row.bank}</TableRowColumn>
                  <TableRowColumn>{row.iban}</TableRowColumn>
                  <TableRowColumn>{row.balance}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <br/>

          <ButtonBar isAdmin={this.props.isAdmin} onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
