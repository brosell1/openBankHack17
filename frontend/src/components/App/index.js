import React, { Component } from 'react';
import './App.css';

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
     let changeState = {};
     changeState[page] = false
     event.preventDefault();
     this.setState((prevState) => (changeState));
   }
  //
  //  handleReturnFromNotes(e) {
  //   e.preventDefault()
  //   this.setState((prevState) => ({
  //     addNotes: !prevState.addNotes
  //   }))
  // }
  //
  //   handler(e) {
  //     e.preventDefault()
  //     this.setState((prevState) => ({
  //       addCompany: !prevState.addCompany
  //     }))
  //   }
  //
  //   handleEditCompany(e) {
  //     e.preventDefault()
  //     this.setState((prevState) => ({
  //       editCompany: !prevState.editCompany
  //   }))
  // }


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
     this.setState((prevstate) => ({
       isMember: true,
       isLoggedIn: false,
       addCompany: false,
       addNotes: false,
       editCompany: false,
       wrongPassword: false,
       User: '',
       Password: '',

     }));
   }

   handleLoginClick(event) {
     event.preventDefault();
     fetch('/login', {
       headers: {
         'Content-Type': 'application/json'
       },
       method: 'POST',
       body: JSON.stringify({
         User: this.state.User,
         Password: this.state.Password
       } )
     })
     .then(response => response.json())
     .then(value => value.message === 'logged in' ? this.setState((prevstate) => ({
       isLoggedIn : !prevstate.isLoggedIn
     })): this.setState((prevstate) => ({
       wrongPassword : !prevstate.wrongPassword})))
   }
   handleMemberStatus(event) {
     event.preventDefault();
     fetch('/users', {
       headers: {
         'Content-Type': 'application/json'
       },
       method: 'POST',
       body: JSON.stringify({
         User: this.state.User,
         Password: this.state.Password
       } )
     })
     .then(response => response.json())
     .then(value => {
       console.log(value)
       return value.message === 'User created' ? this.setState((prevstate) => ({
       isMember: true, isLoggedIn: true}))
       : console.log('nope')});
     event.preventDefault();
   }

   handleDropdown(x, event){
     this.setState(() => ({
       dropdownSelection: event.value
     }));
   }

   handleSearch(x, event) {
     this.setState((prevState) =>({
       companyList : [],
       noteList : []
     }))
     const input = encodeURIComponent(document.getElementById("input").value.trim());
     let searchParams = this.state.dropdownSelection;
     let y = searchParams !== 'actionNeeded' ? 'companies' : 'notes'
     fetch(`/${y}/?${searchParams}=${input}`)
     .then(response => response.json()).then(value => {
       if (y === 'companies'){
         this.setState(prevState => ({companyList: value}));
       } else {
         this.setState(prevState => ({noteList: value}));
       }

        })
     .catch((err) => console.log(err))
      }

   handleNoteSearch(event) {
     fetch(`/search/notes/?companyName=${event}`)
     .then(response => response.json()).then(value => { this.setState(prevState => ({companyList: value}));
        })
     .catch((err) => console.log(err))
      }


   render() {
     // const {isMember, isLoggedIn, addCompany, addNotes, editCompany, wrongPassword} = this.state;
     // if (!isLoggedIn && isMember && wrongPassword) {
     //   return (
     //     <div className="LoggedInCheck">
     //       <img width="500vw" src="./Dell-Logo.png"/>
     //       <UserAndPass onChange={this.handleInputChange}/>
     //       <ColorButton id="login" color="teal" value="Log In" onClick={this.handleLoginClick}/>
     //       <a href="" onClick={this.handleRegisterClick}>Not signed up? Register here.</a>
     //       <p>Wrong User name or password</p>
     //     </div>
     //   )
     // }
     // if (!isLoggedIn && isMember) {
     //   return (
     //     <div className="LoggedInCheck">
     //       <img width="500vw" src="./Dell-Logo.png"/>
     //       <UserAndPass onChange={this.handleInputChange}/>
     //       <ColorButton id="login" color="teal" value="Log In" onClick={this.handleLoginClick}/>
     //       <a href="" onClick={this.handleRegisterClick}>Not signed up? Register here.</a>
     //     </div>
     //   )
     // }
     // if (!isLoggedIn && !isMember) {
     //   return (
     //     <div className="LoggedInCheck">
     //       <img width="500vw" src="./Dell-Logo.png"/>
     //       <UserAndPass onChange={this.handleInputChange}/>
     //       <Checkbox label="Do you agree to the Terms and Conditions?"/>
     //       <div>
     //
     //       <ColorButton id="register" color="olive" value="Register" onClick={this.handleMemberStatus}/>
     //       <ColorButton id="backr" color="olive" value="Back" onClick={this.handleRegisterClick}/>
     //
     //     </div>
     //     </div>
     //   )
     // }
     // if (isLoggedIn && isMember && editCompany) {
     //   return (
     //     <div>
     //       <img width="300vw" src="./Dell-Logo.png"/>
     //       <ColorButton id="logout" onClick={this.handleLogoutClick} color="blue" value="Log Out"/>
     //       <br /><br /><br />
     //       <EditACompany handler={this.handleEditCompany}/>
     //     </div>
     //   )
     // }
     // if (isLoggedIn && isMember && addCompany) {
     //   return (
     //     <div>
     //     <img width="300vw" src="./Dell-Logo.png"/>
     //     <ColorButton id="logout" onClick={this.handleLogoutClick} color="blue" value="Log Out"/>
     //     <br/><br/><br/>
     //     <AddACompany handler={this.handler}/>
     //   </div>)
     // }
     // if (isLoggedIn && isMember && addNotes) {
     //   return (
     //     <div>
     //     <img width="300vw" src="./Dell-Logo.png"/>
     //     <ColorButton id="logout" onClick={this.handleLogoutClick} color="blue" value="Log Out"/>
     //     <br/><br/><br/>
     //     <AddANote handler={this.handleReturnFromNotes}/>
     //   </div>
     //   )
     // }
     // if (isLoggedIn && isMember) {
     //   return (
     //     <div className="LoggedInCheck">
     //       <img width="300vw" src="./Dell-Logo.png" alt=''/>
     //       <br/><br/><br/>
     //       <ColorButton id="logout" onClick={this.handleLogoutClick} color="blue" value="Log Out"/>
     //
     //       <Form className="ui form">
     //         <input  placeholder="   Search Term" id='input' />
     //       </Form>
     //       <DropdownSelection className="drop" onChange={this.handleDropdown} />
     //       <div>
     //
     //       <ColorButton id="search" color="red" value="Search" onClick={this.handleSearch}/>
     //       <ColorButton id="addc" color="yellow" value="Add a Company" onClick={this.handler}/>
     //       <ColorButton id="addn" color='pink' value='Add a Note' onClick={this.handleReturnFromNotes} />
     //       <ColorButton id="edit" color='pink' value='Edit a Company' onClick={this.handleEditCompany} />
     //     </div>
     //       <CardsList companyList={this.state.companyList} onClick={this.handleNoteSearch}/>
     //       <NotesList className="notecards" noteList={this.state.noteList} />
     //     </div>
     //   )
     // }
   }
 }

export default App;
