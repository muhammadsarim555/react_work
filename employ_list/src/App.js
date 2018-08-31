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
      userEmail : ""
    }
  }
    renderUserInput(i){
      // console.log(i.target.value)
    const userEmail = i.target.value;
    this.setState ({
      userEmail ,
    })
  }

  renderSubmit(){

    const { email , password , userEmail }= this.state;
     userEmail === email ? swal("Good job!", "You have been logined!", "success") : console.log("wrong");
     this.setState ({
      userEmail: ""
     })
      console.log(userEmail);
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <input  onChange={this.renderUserInput.bind(this)} value={this.state.userEmail} />
          <button onClick={this.renderSubmit.bind(this)}>Submit </button>
        </header>
      
      </div>
    );
  }
}

export default App;
