import React, { Component } from 'react';
// import './../../App.css';
import logo from './../../off.jpg';


class Bulb extends Component {
  constructor(props){
    super();
    this.state = {
      email : "admin",
      password : "admin",
    };
    this.checkingUser = this.checkingUser.bind(this);
  }
 
  checkingUser(){
    // const {email , password} = this.state;
    // if(email )
    this.props.work();
    return(
      <input placeholder="Email" onChange={this.setState=({email : })} />
    )
  }

  render() {
    console.log(this.props)
    return (
      <div className="app"> 

      <h3>{this.props.content}  </h3>
      <button onClick={this.checkingUser} >Next Page </button>
      <button onClick={this.props.forFalse}> Logout </button>
      <br/>
      <hr/>
      <br/>


    </div>
    );
  }
}

export default Bulb;
