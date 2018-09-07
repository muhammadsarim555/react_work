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
  constructor() {
    super();
    this.state = {
      inputValue: "",
      array: [],
    };
  }

  header() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <div>
          <input className="input" value={this.state.inputValue} onChange={(e) => this.checking(e.target.value)} />
          <button onClick={this.submit.bind(this)} >Submit </button>
          <button onClick={this.gettingData.bind(this)} >View Data </button>

        </div>
      </header>
    )
  }

  checking(e) {
    // console.log(e);
    this.setState({
      inputValue: e,
    })
    // console.log(this.state.inputValue);
  }

  submit() {
    const { inputValue } = this.state;
    // console.log(inputValue , "input value ")
    firebase.database().ref("Data/").push(inputValue);

    this.setState({
      inputValue: "",
    })
  }

  gettingData() {
    
    const { array } = this.state;
    let gettingArray = [];
    firebase.database().ref("Data/").on("child_added", (snapshot) => {
      // console.log(snapshot.val())
      gettingArray.push(snapshot.val())
    })
    // console.log(gettingArray , "gettingArray");
    this.setState({
      array :  gettingArray,
    })
    
  }


  render() {
    const {array} = this.state;
    return (
      <div className="App">
        {this.header()}
        <ul>
        {
      array.map((v,i)=> {
        // console.log(v , "v for value")
        return <li>
          {v}
          </li>
      })
    }
    </ul>
      </div>
    );
  }
}

export default App;
