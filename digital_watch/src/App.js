import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
      

   
    
  render() {
    const time = new Date();
      let min = time.getMinutes();
      let sec = time.getSeconds()

      console.log(sec);
      
    return (
      <div className="App" onLoad={() => this.getTime()}>
      
      </div>
    );
  }
}

export default App;
