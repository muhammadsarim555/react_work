import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bulb from "./Component/BrokenBulb/brokenbulb.js"
class App extends Component {
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
      <Bulb name={"Sarim" } work={"Web And Mobile Developer"} >
          <h4>We are as a team </h4>
         </Bulb>
    </div>
    );
  }
}

export default App;
