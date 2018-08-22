import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
  
    var a = localStorage.getItem("todovalue");
    this.state = {
      userInput : "",
      list : [],
      ls : a,
    // edit : "",
      
    }
console.log(this.state.ls)
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
localStorage.setItem("todovalue" , listArray) 

  this.setState({
    list : listArray,
    userInput: "",
    edit : "",
  },()=> console.log(this.state.list))
  }
}

renderEdit(editValue){
  this.setState({
      userInput : editValue,
  }, console.log(this.state.userInput , "userinput"))
}

renderHeader(){
  return(<div className="App">
  <h4 className="h4"> To Do List With React</h4>  
  <div className="form-group">
 <input type="text" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} className="form-control" id="title" placeholder="Title"/>
 <button addbtn type="button" onClick={()=> this.addToList(this.state.userInput)} className="btn btn-elegant  addbtn ">Add </button>
 
</div>

</div>);
}

getValue(){
  var b = localStorage.getItem("todovalue");
  return(
    
<ul className="list-group" style={{ textAlign: 'center' }}>

          {
            this.state.list.map((val) =>  <li className="list-group-item ">
            {val}<button type="button" className="btn btn-danger float-right addbtn"   ><i className="fa fa-trash" aria-hidden="true"></i></button>
             <button type="button" className="btn btn-danger float-right addbtn" onClick={(editValue)=> this.renderEdit(prompt("Enter Value" , ""))}  ><i className="fa fa-edit" aria-hidden="true"></i></button>
             </li>
          ) }
            {/* <button type="button"  className="btn btn-elegant float-right addbtn"><i className="fa fa-trash" aria-hidden="true"></i></button> */}
           </ul>
  )
}
  
  render() {
    return (
      // console.log(this),
<div className="content" >
      {this.renderHeader()} 
      {this.getValue()}
  
      </div>
      );
  }
}

export default App;
