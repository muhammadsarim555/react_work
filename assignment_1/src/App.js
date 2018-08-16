import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = "Hello World";
    return (
      <div className="App">
        <ul> 
          {/* return */}
          <li> {name} </li>
           </ul>
      </div>
    );
  }
}

export default App;
