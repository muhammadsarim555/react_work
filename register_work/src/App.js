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
    <div className="form-group row">
        {/* <div className="col-sm-10"> */}
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
        {/* </div> */}
    </div>

    <div className="form-group row">
        {/* <div className="col-sm-10"> */}
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/ >
        {/* </div> */}
    </div>

    <div className="form-group row">
        <div className="col-sm-10">
            <button type="submit" className="btn btn-primary btn-md">Sign in</button>
        </div>
    </div>
    </div>
    );
  }
}

export default App;
