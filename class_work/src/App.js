import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { 
  constructor(){
    super();
    this.state = {
        text : "",
        array: [],
        currentIndex: null,
    }
    this.userInput = this.userInput.bind(this)
  }
  userInput(e){
      this.setState({
          text: e.target.value,
        })
        // console.log(this.state.text)
    return (
        <div>
        <h3> Input  Here</h3>
        </div>
    );
}
submit(p){
    const {array , text} = this.state;
    const obj = {text, data : new Date().toString()};
    console.log(obj)
    array.push(obj)
    this.setState({
        array ,
        text : ""
    }
    
    , () => console.log(this.state.array))
    
}

renderBoolean(index){
    
    const {array}=this.state
    array[index].hide=true
    this.setState({array})

}

render() {
    const { text , array ,currentIndex} = this.state; 
    return (
        
        <div className="App">
        {/* {this.userInput()} */}
        
        <input type="text"  value={this.state.text} onChange={this.userInput} />
        <button onClick={() => this.submit()}> Add  </button>
        <button onClick={() => this.submit()}> Show  </button>
        
    {text && <h1> You are typing {text.split('').reverse()} </h1> }
    <ul className="list-group" style={{ textAlign: 'center' }}>

        {
          array.map((val, index) =>
            <li  key={index}>
             {!val.hide &&  <p>{ val.text} | {val.data }</p>} 
              {/* {console.log(index)} */} 
             <button onClick={() => this.renderBoolean.bind(this , index)}> Hide  </button>
            </li>
          )}
      </ul>
      {/* {!currentUser && this.renderLogin()}
      {currentUser && !addForm && this.showTable()   }
      {currentUser && addForm && this.addEmployForm() } */}
      </div>
    );
  }
}

export default App;