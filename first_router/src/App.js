import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
   

class App extends Component {
   
    operation(){
        console.log("chekck")
        this.props.history.push('/about')
    }
   
    render() {
      const text = 'Hello World';
       
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          <h1>{text}</h1>
          </p>
          <button onClick={this.operation.bind(this)}> Operation </button>

        </div>
      );
    }
  }




export default App;
