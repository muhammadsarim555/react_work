import React, { Component } from 'react';
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
      
    }
    // , ( ) => console.log(input)
  );
  }
addToList(p){
  let listArray = this.state.list; 
  if(p == "" ){
    // input == "" ?
     alert("Please Write Something")
}
// : 
else{
listArray.push(p)
  this.setState({
    list : listArray,
    userInput: ""
  },()=> console.log(this.state.list))
  }
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
        
    </div>

  </div>
  <ul style={{ textAlign: 'center' }}>
          {this.state.list.map((val) =>  <li>{val}</li> ) }
           </ul>
      </div>
  );
  }
}

export default App;
