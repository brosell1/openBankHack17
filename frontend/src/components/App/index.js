import React, {Component} from 'react';

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
      isAdmin: true,
      listTransactions: false,
      newTransaction: false,
      newBulkTransaction: false,
      newTeamMember: false,
      newBeneficiary: false,
      newAuthLevel: false,
      error: false,
      user: '',
      snackBar:false,
      password: '',
      userDetails: {},
      authLevelDetails: {},
      approvedNotifications: [],
      pendingNotifications: [],
      ledgerIds:[],
      listId: '',
      ledgers: [],
      transactions: [],
      transaction:{},
      beneficiaries: []
    };
  }

  componentDidMount = () => {
    this.getLedgers();
  }

  handleGoTo = (page) => {
    this.setState({[page]: true});
  }


   handleSnackBar = (event) => {
     event.preventDefault();
     this.handleReturn(event);
     this.setState({
       snackBar: true,
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
       snackBar: false,
    }));
  }

  handleGoToList = (e) => {
    this.setState(preState =>({listId: e, listTransactions: true}));
  }

  handleInputChange = (event) => {
    const target = event.target,
      value = target.value,
      name = target.name;
    this.setState({[name]: value});
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
    this.setState(preState =>({isLoggedIn: true}))
  }

  getLedgers = () => {
    var temp = [];
    fetch(`/createrequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({method: "get", "path": "v1/customer/ledgers/5a063c45-e49f-4578-b770-fcaad7889a8e", "requestFields": {}})
    }).then((response) => response.json()).then(value => {
      console.log(value.error);
      temp.push(value.payload);
    });

    fetch(`/createrequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({method: "get", "path": "/v1/customer/ledgers/5a063c7a-3ffd-48cd-9a43-ce94e6c2664a", "requestFields": {}})
    }).then((response) => response.json()).then(value => {
      console.log(value);
      temp.push(value.payload);
    });
    fetch(`/createrequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({method: "get", "path": "/v1/customer/ledgers/5a063c8e-f0f7-4dbc-84df-c71ec461efed", "requestFields": {}})
    }).then((response) => response.json()).then(value => {
      console.log(value);
      temp.push(value.payload);
    });
    this.setState({ledgers: temp});
  }

  getLedgerTransactions = (ledgerId) => {
    fetch(`/createrequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({method: "get", "path": `v1/customer/ledgers/${ledgerId}/entries`, "requestFields": {}})
    }).then((response) => response.json()).then(value => {
      this.setState({transactions: value.payload})
    });
  }

    getTransactionDetails = (transactionId) => {
      fetch(`/createrequest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({method: "get", "path": `v1/customer/transactions/${transactionId}`, "requestFields": {}})
      }).then((response) => response.json()).then(value => {
        this.setState({transaction: value.payload})
      });
    };

    render() {
      const {
        isLoggedIn,
        isAdmin,
        listTransactions,
        newTransaction,
        newBulkTransaction,
        newTeamMember,
        newBeneficiary,
        newAuthLevel,
        error
      } = this.state
      // login page, wrong password
      if (!isLoggedIn && error) {
        return (
          <div>
            <Login/>
            <p>Wrong User name or password</p>
          </div>
        )
      }
      // login page, done
      if (!isLoggedIn) {
        return (<Login onChange={this.handleInputChange} onClick={this.handleLoginClick}/>)
      }
      // create a new user page, done
      if (isLoggedIn && isAdmin && newTeamMember) {
        return (<NewTeamMember handleSnackBar={this.handleSnackBar} handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick}/>)
      }
      // create a new auth level, done
      if (isLoggedIn && isAdmin && newAuthLevel) {
        return (<NewAuthLevel handleSnackBar={this.handleSnackBar} handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick}/>)
      }
      // create new transactions, done
      if (isLoggedIn && newTransaction) {
        return (<NewTransaction handleSnackBar={this.handleSnackBar} handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick} beneficiaries={this.state.beneficiaries} ledgers={this.state.ledgers} handleChange={this.handleInputChange}/>)
      }
      // create new bulk transaction, done
      if (isLoggedIn && newBulkTransaction) {
        return (<BulkTransaction handleSnackBar={this.handleSnackBar} handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick}/>)
      }
      // new newBeneficiary, done
      if (isLoggedIn && newBeneficiary) {
        return (<NewBeneficiary handleSnackBar={this.handleSnackBar} handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick}/>)
      }
      // transaction list, done
      if (isLoggedIn && listTransactions) {
        return (<LedgerTransactions listId={this.state.listId} iban={this.state.ledgers[0].iban} onClick={this.handleGoTo} handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick}/>)
      }
      // new homepage, done
      if (isLoggedIn) {
        return (<HomePage snackBar={this.state.snackBar} handleGoToList={this.handleGoToList} ledgers={this.state.ledgers} onClick={this.handleGoTo} isAdmin={this.state.isAdmin} handleReturn={this.handleReturn} handleLogoutClick={this.handleLogoutClick}/>)
      }
    }
  }

  export default App;
