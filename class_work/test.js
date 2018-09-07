import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  constructor(){
    super();
    this.state = {
      
      currentUser : false,
      addForm : false,
    }
    this.renderLogin = this.renderLogin.bind(this);
    this.showTable = this.showTable.bind(this);
    this.addEmployForm = this.addEmployForm(this);
  }
  addEmployForm(){

  }

  showTable(){
    return (
      <h1> Show Table</h1>
    );
  }
  renderLogin(){
      const { currentUser , addForm } = this.state;
      return (
        <div>
        <h1> checkomg</h1>
        <button onClick={ () => this.setState({currentUser : true  }) }>click </button>
        </div>
      );
  }

  render() { 
    const { currentUser , addForm } = this.state ;
    return (

      <div className="App">
      {!currentUser && this.renderLogin()}
      {currentUser && !addForm && this.showTable()   }
      {currentUser && addForm && this.addEmployForm() }
      </div>
    );
  }
}

export default App;
