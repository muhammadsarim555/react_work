import React, { Component } from 'react';
import './App.css';

//   var config = {
//     apiKey: "AIzaSyCjQj4vJ7xgmKZyR2bxiqsuqcbeqicrbHA",
//     authDomain: "sarimuni-555.firebaseapp.com",
//     databaseURL: "https://sarimuni-555.firebaseio.com",
//     projectId: "sarimuni-555",
//     storageBucket: "sarimuni-555.appspot.com",
//     messagingSenderId: "352387490785"
//   };
//   firebase.initializeApp(config);

class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       inputValue : "",
//     };
//   }

  

  submit(){
    const {inputValue} = this.state;
    console.log(inputValue , "input value ")
    firebase.database().ref("Data/").push(inputValue);

    this.setState({
      inputValue : "",
    })
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        <div> 
            <input className="input" value={this.state.inputValue} onChange={(e) => this.checking(e.target.value)}/ >
            <button onClick={this.submit.bind(this)} >Submit </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
