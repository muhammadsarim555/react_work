import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizList from './Screen/QuizList/QuizList';

class App extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
      <QuizList />
      </div>
    );
  }
}

export default App;
