import React, { Component } from 'react';
import logo from '../.././logo.svg';
import '../.././App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            list : ["Sarim"  , "Rohail"  ,"Manal" , 'Faraz' , 'Umar' ,'Masood' , 'Afzal'],
        }
    }
    renderHeader(){
        <h3 className="color">Search Bar</h3>
        
    }
    // renderBody(){
        
    // }
  render() {
    return (
      <div className="App">
        {this.renderHeader}
      </div>
    );
  }
}

export default App;
