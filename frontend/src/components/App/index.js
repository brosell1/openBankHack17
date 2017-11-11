import React, { Component } from 'react';

import BulkTransaction from '../BulkTransaction';
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
       error: false
       user: '',
       password: '',
       userDetails: {},
       authLevelDetails: {},
       approvedNotifications: [],
       pendingNotifications: [],
       ledgers: [],
       transactions: [],
     };
   }

   handleReturn = (event, page) => {
     event.preventDefault();
     this.setState(({
       [page]:false
     }));
   }

   handleInputChange(event) {
     const target = event.target,
           value = target.value,
           name = target.name;
     this.setState({
       [name]: value
     });
   }
 }

  handleLogoutClick() {
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
         user: this.state.user,
         password: this.state.password
       } )
     })
     .then(response => response.json())
     .then(value => value.payload ? this.setState({
       isLoggedIn : !prevstate.isLoggedIn
     }): this.setState((prevstate) => {
       error : !prevstate.error}))
   }


    getLedgers() => {
       fetch(`play.railsbank.com/v1/customer/endusers/${this.state.user.companyId}`)
       .then(response => response.json())
       .then(value => {
         this.setState(prevState => ({companyDetails: value}));
       })
       .catch((err) => console.log(err))
   }

   getTransactions(ledgerId) => {
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
     const {isLoggedIn, isAdmin, listTransactions, newTransaction, newBulkTransaction, newTeamMember, newBeneficiary, newAuthLevel, error} = this.state;
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
         <Login />
       )
     }
     // create a new user page
     if (isLoggedIn && isAdmin && newTeamMember) {
       return (
         <NewTeamMember />
       )
     }
     // create a new auth level
     if (isLoggedIn && isAdmin && newAuthLevel) {
       return (
         <NewAuthLevel />
       )
     }
     // create new transactions
     if (isLoggedIn && newTransaction) {
       return (
         <NewTransaction />
       )
     }
     // create new bulk transaction
     if (isLoggedIn && newBulkTransaction) {
       return (
         <BulkTransaction />
       )
     }
     // new newBeneficiary
     if (isLoggedIn && newBeneficiary) {
       return (
         <NewBeneficiary />
       )
     }
     // transaction list
     if (isLoggedIn && listTransactions) {
       return (
         <LedgerTransactions />
       )
     }
     // new homepage
     if (isLoggedIn) {
       return (
         <HomePage />
       )
     }
   }
 }
