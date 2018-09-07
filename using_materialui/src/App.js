import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyCjQj4vJ7xgmKZyR2bxiqsuqcbeqicrbHA",
    authDomain: "sarimuni-555.firebaseapp.com",
    databaseURL: "https://sarimuni-555.firebaseio.com",
    projectId: "sarimuni-555",
    storageBucket: "sarimuni-555.appspot.com",
    messagingSenderId: "352387490785"
  };
  firebase.initializeApp(config);

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
