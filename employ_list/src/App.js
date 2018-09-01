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
      firstName : "",
      lastName : "",
      objEmail : "",
      salary : "",
      date : "",
      
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
      if(email == "admin" && password == "admin") {  
        // this.setState({currentUser : true,}) , console.log(this.state.currentUser)
        swal("Good job!", "You clicked the button!", "success")
        this.setState({
          currentUser : true,
          email : "",
          password : "",
          
        })
      // console.log(this.state.currentUser)
        
        }
    else {  
    swal("Error!", "Your Email Might Wrong!", "error")
      this.setState({
        email : "",
        password : "",
        currentUser : false
      })
      // console.log(this.state.currentUser)
    }
  }

  renderLogin(){
    return( <div className="login">
    <div className="login-triangle"></div> 
    
    <h2 className="login-header">Log in</h2>
      <p><input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.renderLoginEmail(e.target.value)} required /></p>
      <p><input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.renderLoginPassword(e.target.value)} required /></p>
      <p><input type="submit" value="Log in" onClick={this.renderAuth.bind(this)} /></p>
  </div>
  );
  }

logOut(){
    this.setState({
      currentUser : false,
    })
    console.log(this.state.currentUser)
  }

  renderForm(){
    return(
    <div className="table-responsive">

  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Salary</th>
        <th scope="col">Date</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Rohail</td>
        <td>Zafar</td>
        <td>rohail@gmail.com</td>
        <td>40000</td>
        <td>1/20/2018</td>
        <td><button className="btn btn-default"> Edit </button></td>
        <td><button className="btn btn-default"> Delete </button></td>
        
        
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Farrukh</td>
        <td>Rasheed</td>
        <td>farrukh@gmail.com</td>
        <td>100000</td>
        <td>2/4/2017</td>
        <td><button className="btn btn-default">Edit </button></td>
        <td><button className="btn btn-default">Delete </button></td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Ahmed</td>
        <td>Khan</td>
        <td>ahmed@gmail.com</td>
        <td>110000</td>
        <td>23/8/2017</td>
        <td><button className="btn btn-default"> Edit </button></td>
        <td><button className="btn btn-default"> Delete </button></td>
      </tr>
    </tbody>
  </table>
  <button type="button" className="btn btn-danger add">Add</button>

</div>
    );
  }

  render() {
    const {currentUser } = this.state;
    const result = currentUser == true;
    return (
      <div className="App">

      {!currentUser && this.renderLogin()}    
      {result && <button className="btn btn-default" onClick={this.logOut.bind(this)} >Logout </button>}
      {result && this.renderForm() }
      

    
      
      
      </div>
    );
  }
}

export default App;
