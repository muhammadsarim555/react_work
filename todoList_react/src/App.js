import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  renderHeader(){
    return(
      <div id="header"> 
          To Do List With React 
      </div>
    );
  }

  renderTitle(){

    return (
    <div className="App">
         <div className="form-group">
        <input type="text" className="form-control" id="title" placeholder="Title"/>
        <button id="addbtn" type="button" className="btn btn-elegant">Add </button>
    </div>

  </div>
    );
  }
  render() {
    
    return (
      // console.log(this),
<div className="content" >
      {this.renderHeader()} 
     {this.renderTitle()}
      </div>
    );
  }
}

export default App;
