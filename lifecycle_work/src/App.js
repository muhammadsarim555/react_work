import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kit from './Screen/Kit/Kit';
import Teacher from './Screen/Teacher/Teacher';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: 'sarim',
      volume: 0,
      furtherState: []
    }
    this.updateSteps = this.updateSteps.bind(this)
  }

  static getDerivedStateFromProps() {
    return { volume: 5 }
  }

  updateSteps(furtherSteps) {
    this.setState({ furtherSteps })
  }

  render() {
    const { volume, furtherSteps } = this.state;
    console.log(furtherSteps);
    return (
      <div >
        <h1> LifeCycle Hooks. </h1>
        <hr />
        <br />
        <Kit dressColor="yellow" furtherSteps={this.furtherSteps} />

        <hr />
        <Teacher updateSteps={this.updateSteps}  />



      </div>
    );
  }
}

export default App;
