import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from "sweetalert";




class App extends Component {
  constructor(){
    super();
    this.state = {
      email : "",
      password  : "",
      currentUser  : false,
      
    }
  }

  renderLoginEmail(v){
   this.setState({
     email : v,
   } )
  //  console.log(this.state.email)
  

}

  renderLoginPassword(v){
    this.setState({
      password : v,
    })
    
  }

  renderAuth(){
      const { email , password } = this.state;
      email == "admin@domain.com" && password == "admin" ? swal("Good job!", "You clicked the button!", "success")
      : swal("Error!", "Your Email Might Wrong!", "error")
      this.setState({
        email : "",
        password : "",
      })
  }
  render() {
    return (
      <div className="App">
        <div className="login">
  <div className="login-triangle"></div>
  
  <h2 className="login-header">Log in</h2>
    <p><input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.renderLoginEmail(e.target.value)} /></p>
    <p><input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.renderLoginPassword(e.target.value)} /></p>
    <p><input type="submit" value="Log in" onClick={this.renderAuth.bind(this)} /></p>
</div>
      
      
      </div>
    );
  }
}

export default App;
