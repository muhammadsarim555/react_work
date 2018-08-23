import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      time : new Date(),
    }
  }
      

   
    
  render() {
      
    return (
      <div className="App">
        {this.state.time.toLocaleString()}
      </div>
    );
  }
}

export default App;
