import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Edit from './Component/Edit/Edit';
import Delete from './Component/Delete/Delete';
import Submit from './Component/Submit/Submit';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAO55J6eMJ_BWo0DEJpJ9QQuRHDqGyKloo",
  authDomain: "pollinga-app.firebaseapp.com",
  databaseURL: "https://pollinga-app.firebaseio.com",
  projectId: "pollinga-app",
  storageBucket: "pollinga-app.appspot.com",
  messagingSenderId: "580209545847"
};
firebase.initializeApp(config);

const db = firebase.database();
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      text : '',
    };

  }

  gettingInput(e){
    // console.log(e);
    this.setState({
      text : e,
    })
    }

    
  addData(p){
    const {text} = this.state;
    console.log(text)
    db.ref("Data").push(text);
    this.setState({
      text: "",
    })
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <input placeholder="Title" value={this.state.text} onChange={(e) => this.gettingInput(e.target.value)} />
          {this.addData.bind(this)}
          <button onClick={this.addData.bind(this)}>Add Data </button>
        </header>
          <Edit />
          <Delete />
          

      </div>
    );
  }
}

export default App;
