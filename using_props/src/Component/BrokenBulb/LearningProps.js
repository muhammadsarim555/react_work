import React, { Component } from 'react';
// import './../../App.css';
import logo from './../../off.jpg';


class Bulb extends Component {
  constructor(props){
    super();
    this.state = {
      email : "",
      password : "",
    };
    // this.checkingUser = this.checkingUser.bind(this);
  }
 
  checkingUser(e){
    
    const {email , password} = this.state;
    if(email === "admin" && password === "admin" ){
      this.props.work()
    }
     }

     gettingEmail(e){
       this.setState({
         email : e,
         password : e,
        })
        console.log(this.state.email, "email");
        console.log(this.state.password , "password");
     }
  render() {
    console.log(this.props)
    return (
      <div className="app"> 

      <h3>{this.props.content}  </h3>
      <input value={this.state.email} placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
        <input value={this.state.password} placeholder="Password" onChange={(e) => this.gettingEmail=( e.target.value )} />

      <button onClick={this.checkingUser.bind(this)} >Next Page </button>
      <button onClick={this.props.forFalse}> Logout </button>
      <br/>
      <hr/>
      <br/>


    </div>
    );
  }
}

export default Bulb;
