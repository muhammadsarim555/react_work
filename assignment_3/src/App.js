import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      email : "sarim@gmail.com",
      password  : "sarimsarim",

    }
  }
    userInput(i){
      // console.log(i.target.value)
    const userValue = i.target.value;
    this.setState ({
      userEmail : userValue,
    })
  }

  renderSubmit(i){

    const { email , password , userEmail }= this.state;
     userEmail === email ? console.log("YOu have been logined") : console.log("wrong");
    console.log(userEmail);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <input onChange={this.userInput.bind(this)} />
          <button onClick={this.renderSubmit.bind(this)}>Submit </button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
