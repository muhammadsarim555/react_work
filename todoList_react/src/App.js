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

  
changeUserInput(input){
    this.setState({
      userInput: input,
    }, ( ) => console.log(input));
  }
addToList(input){
  let listArray = this.state.list; 
  listArray.push(input)
  this.setState({
    list : listArray,
    userInput: ""
  },()=> console.log(this.state.list))
}
  
  render() {
    
    return (
      // console.log(this),
<div className="content" >
      {/* {this.renderHeader()}  */}
      <div className="App">
         <h4 className="h4"> To Do List With React</h4>  
         <div className="form-group">
        <input type="text" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} className="form-control" id="title" placeholder="Title"/>
        <button id="addbtn" type="button" onClick={()=> this.addToList(this.state.userInput)} className="btn btn-elegant">Add </button>
        <ul>
          {this.state.list.map((val) =>  <li>{val}</li> ) }
           </ul>
    </div>

  </div>
    
      </div>
  );
  }
}

export default App;
