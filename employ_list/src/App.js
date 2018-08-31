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
      userText : "",
      userPassword : "",
    }
  }
    renderUserInput(i){
      // console.log(i.target.value)
    const userText = i.target.value;
    this.setState ({
      userText  , 
    })
  }

  renderUserPassword(i){
    const userPassword = i.target.value;
    this.setState({
      userPassword,
    })
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
          <input  onChange={this.renderUserInput.bind(this)} value={this.state.userText} />
          <input onChange={this.renderUserPassword.bind(this)} value={this.state.userPassword} />
          <button onClick={this.renderSubmit.bind(this)}>Submit </button>
        </header>
      
      </div>
    );
  }
}

export default App;
