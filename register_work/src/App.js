import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div className="app"> 
    <h3 className="heading">Register Form </h3>
    <div className="form-group row">
            <input type="email" className="form-control" id="email" placeholder="Email" />
    </div>

    <div className="form-group row">
            <input type="password" className="form-control" id="password" placeholder="Password"/ >
    </div>

        <center>
            <button type="submit" className="btn btn-primary justify-content-center ">Sign in</button>
            </center>
    </div>
    );
  }
}

export default App;
