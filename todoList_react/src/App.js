import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  

  renderTitle(){
    return (
    <div className="App">
         <div className="form-group">
        <input type="text" className="form-control" id="title" placeholder="Title"/>
        <button id="addbtn" type="button" class="btn btn-elegant">Add </button>
    </div>

  </div>
    );
  }
  render() {
    
    return (
      console.log(this),
     this.renderTitle()
    );
  }
}

export default App;
