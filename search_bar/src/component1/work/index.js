import React, { Component } from 'react';
import logo from '../.././logo.svg';
import '../.././App.css';

class App extends Component {
    
constructor(){
    super();
    this.state = {
        list: ["sarim" , "rohail " , "masood" ],
    }
}

renderHeader(){
    return(
        <h3>Searching</h3>
    );
}
    render() {
      return (
        <div className="App">
            {this.renderHeader()}
        </div>
      );
    }
  }

export default App;
