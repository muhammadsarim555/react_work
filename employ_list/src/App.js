import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from "sweetalert";




class App extends Component {
  constructor(){
    super();
    this.state = {
      email : "sarim@gmail.com",
      password  : "sarimsarim",
      userEmail : "",
      userPassword : "",
    }
  }

  login(){
  
    console.log()
  }

  renderSubmit(){

    const { email , password , userPassword , userText}= this.state;
    userText === email && userPassword === password ? swal("Congragulation!", "You have been logined!", "success") : swal("Error!", "The Email Is Badly Access!", "error");
     this.setState ({
       userText : "",
      userPassword: ""
     })
      console.log(userPassword);
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <input className="form-control"  onChange={(e) => e.target.value} value={this.state.userText} />
      {/* <input className="form-control" onChange={this.renderUserPassword.bind(this)} value={this.state.userPassword} /> */}
      <button onClick={this.renderSubmit.bind(this)}>Submit </button>

        </header>
        {this.login()}
      
      </div>
    );
  }
}

export default App;
