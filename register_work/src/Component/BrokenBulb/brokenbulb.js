import React, { Component } from 'react';
// import './../../App.css';

class Bulb extends Component {
  constructor(){
    super()
    this.state = {
      email : "",
      password : "",
    }

  }
  updateValue(){
    this.setState({
      // email : 
    })
  }
  render() {
    return (
      <div className="app"> 
      <h2>I am Muhammad Sarim WElcome To EasyTech </h2>
    </div>
    );
  }
}

export default Bulb;
