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

  login(v){
      const { email , password , userEmail , userPassword}= this.state;
        v === email ? swal("Congragulation!", "You have been logined!", "success") : swal("Error!", "The Email Is Badly Access!", "error");
        
        // && userPassword === password 
  
  }

  // renderSubmit(){

  //    this.setState ({
  //      userText : "",
  //     userPassword: ""
  //    })
  //     console.log(userPassword);
    
  // }
  render() {
    return (
      <div className="App">
        <div className="login">
  <div className="login-triangle"></div>
  
  <h2 className="login-header">Log in</h2>

  <form className="login-container">
    <p><input type="email" placeholder="Email"/></p>
    <p><input type="password" placeholder="Password" /></p>
    <p><input type="submit" value="Log in"/></p>
  </form>
</div>
        {this.login()}
      
      </div>
    );
  }
}

export default App;
