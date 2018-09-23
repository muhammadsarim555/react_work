import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
        min: 1,
        sec : 20, 
    }
}

renderTime(){
    const {min, sec} = this.state;
}

  render() {
    return (
      <div className="App">
        </div>
    );
  }
}

export default App;
