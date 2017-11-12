import React, { Component } from 'react';

import BulkTransaction from '../BulkTransactions';
import HomePage from '../HomePage';
import LedgerTransactions from '../LedgerTransactions';
import Login from '../Login';
import NewAuthLevel from '../NewAuthLevel';
import NewBeneficiary from '../NewBeneficiary';
import NewTeamMember from '../NewTeamMember';
import NewTransaction from '../NewTransaction';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
       isLoggedIn: false,
       isAdmin: false,
       listTransactions: false,
       newTransaction: false,
       newBulkTransaction: false,
       newTeamMember: false,
       newBeneficiary: false,
       newAuthLevel: false,
       error: false,
       user: '',
       password: '',
       userDetails: {},
       authLevelDetails: {},
       approvedNotifications: [],
       pendingNotifications: [],
       ledgers: [],
       transactions: [],
       beneficiaries: []
     };
   }

   handleGoTo = (page) => {
     this.setState({
       [page] : true
    });
   }

   handleReturn = (event) => {
     event.preventDefault();
     this.setState((prevState) => ({
       isLoggedIn: true,
       isAdmin: prevState.isAdmin,
       listTransactions: false,
       newTransaction: false,
       newBulkTransaction: false,
       newTeamMember: false,
       newBeneficiary: false,
       newAuthLevel: false,
    }));
   }

   handleInputChange = (event) => {
     const target = event.target,
           value = target.value,
           name = target.name;
     this.setState({
       [name]: value
     });
   }

  handleLogoutClick = () => {
     this.setState({
       isLoggedIn: false,
       isAdmin: false,
       listTransactions: false,
       newTransaction: false,
       newBulkTransaction: false,
       newTeamMember: false,
       newBeneficiary: false,
       newAuthLevel: false,
       user: '',
       password: '',
       userDetails: {},
       authLevelDetails: {},
       approvedNotifications: [],
       pendingNotifications: [],
       ledgers: [],
       transactions: [],
       beneficiaries: []
    });
   }

  handleLoginClick = (event) => {
     event.preventDefault();
     fetch('/teammembers', {
       headers: {
         'Content-Type': 'application/json'
       },
       method: 'POST',
       body: JSON.stringify({
         username: this.state.user,
         password: this.state.password
       } )
     })
     .then(response => response.json())
     .then(value => value.payload ? this.setState(prevState => ({
       isLoggedIn : !prevState.isLoggedIn
     })): this.setState((prevState) => ({
       error: !prevState.error})))
   }


    getLedgers = () => {
       fetch(`play.railsbank.com/v1/customer/endusers/${this.state.user.companyId}`)
       .then(response => response.json())
       .then(value => {
         this.setState(prevState => ({companyDetails: value}));
       })
       .catch((err) => console.log(err))
   }

   getTransactions = (ledgerId) => {
      ledgerId.forEach((element) => {
      fetch(`play.railsbank.com/v1/customer/ledgers/${element}`)
      .then(response => response.json())
      .then(value => {
        this.setState(prevState => ({transactions: [...prevState.transactions, value]}));
      })
      .catch((err) => console.log(err))
    });
   }

   render() {
     const {isLoggedIn, isAdmin, listTransactions, newTransaction, newBulkTransaction, newTeamMember, newBeneficiary, newAuthLevel, error} = this.state

     // login page, wrong password
     if (!isLoggedIn && error) {
       return (
         <div>
           <Login />
           <p>Wrong User name or password</p>
         </div>
       )
     }
     // login page
     if (!isLoggedIn) {
       return (
         <Login onChange={this.handleInputChange} onClick={this.handleLoginClick} />
       )
     }
     // create a new user page
     if (isLoggedIn && isAdmin && newTeamMember) {
       return (
         <NewTeamMember handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick} />
       )
     }
     // create a new auth level
     if (isLoggedIn && isAdmin && newAuthLevel) {
       return (
         <NewAuthLevel handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick} />
       )
     }
     // create new transactions
     if (isLoggedIn && newTransaction) {
       return (
         <NewTransaction handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick} beneficiaries={this.state.beneficiaries} ledgers={this.state.ledgers}/>
       )
     }
     // create new bulk transaction
     if (isLoggedIn && newBulkTransaction) {
       return (
         <BulkTransaction handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick} />
       )
     }
     // new newBeneficiary
     if (isLoggedIn && newBeneficiary) {
       return (
         <NewBeneficiary handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick} />
       )
     }
     // transaction list
     if (isLoggedIn && listTransactions) {
       return (
         <LedgerTransactions handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick} />
       )
     }
     // new homepage
     if (isLoggedIn) {
       return (
         <HomePage onClick={this.handleGoTo} isAdmin={this.state.isAdmin} handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick} />
       )
     }
   }
 }

export default App;
