import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = "Hello World";
    const obj = {name: "Hello World Object"}
    return (
      <div className="App">
        <ul> 
          <li> {name} </li>
           </ul>

        <ul> 
          <li>
            {obj.name}
            </li>
        </ul>

      </div>
    );
  }
}

export default App;
