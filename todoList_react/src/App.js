import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
  
    this.state = {
      userInput : "",
      list : [],
    }
  }

  // update(){
  //   this.setState ({
  //   userInput:  input,
  // })

  // }
  // work(){
  //   let titleValue = document.getElementById("title").value;

  // }

  changeUserInput(e){
    this.setState({
      userInput: e,
    }, ( ) => console.log(e));
  }
  renderTitle(){

    return (
    <div className="App">
         <h4 className="h4"> To Do List With React</h4>  
         <div className="form-group">
        <input type="text" onChange={(input) => this.changeUserInput(input.target.value)} value={this.state.userInput} className="form-control" id="title" placeholder="Title"/>
        <button id="addbtn" type="button" className="btn btn-elegant">Add </button>
    </div>

  </div>
    );
  }
  render() {
    
    return (
      // console.log(this),
<div className="content" >
      {/* {this.renderHeader()}  */}
     {this.renderTitle()}
      </div>
    );
  }
}

export default App;
