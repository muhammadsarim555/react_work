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
      currentUser  : null,
      
    }
  }

  renderLoginEmail(v){
   this.setState({
     email : v,
     currentUser : false,
     
   } )
  //  console.log(this.state.email)
  

}

  renderLoginPassword(v){
    this.setState({
      password : v,
      currentUser : false,
    })
    
  }

  renderAuth(){
      const { email , password } = this.state;
      if(email == "admin@domain.com" && password == "admin") {  
        // this.setState({currentUser : true,}) , console.log(this.state.currentUser)
        swal("Good job!", "You clicked the button!", "success")
        this.setState({
          currentUser : true,
          email : "",
          password : "",
          
        })
      console.log(this.state.currentUser)
        
        }
    else {  
    swal("Error!", "Your Email Might Wrong!", "error")
      this.setState({
        email : "",
        password : "",
        currentUser : false
      })
      console.log(this.state.currentUser)
    }
  }

  // logOut(){
  //   // const {currentUser } = this.state;
  //   // const result = currentUser === true;
  //   // result && <button className="btn btn-default" >Logout </button>
  //   return(

  //   );
  // }

  render() {
    const {currentUser } = this.state;
    const result = currentUser === true;
    return (
      <div className="App">
      {result && <button className="btn btn-default" >Logout </button> }
        <div className="login">
  <div className="login-triangle"></div>
  
  <h2 className="login-header">Log in</h2>
    <p><input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.renderLoginEmail(e.target.value)} required /></p>
    <p><input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.renderLoginPassword(e.target.value)} required /></p>
    <p><input type="submit" value="Log in" onClick={this.renderAuth.bind(this)} /></p>
</div>
      
      
      </div>
    );
  }
}

export default App;