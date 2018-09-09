import React, { Component } from 'react';
import logo from './logo.svg';
import Heading from './Screen/Heading/Heading';
import Container from './Container/App/Container';
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
    // console.log(obj)
    array.push(obj)
    this.setState({
        array ,
        text : ""
    }
    
    , () => console.log(this.state.array))
    
}
hide(index) {
    const { array } = this.state;
    array[index].hide = true;
    this.setState({ array : array });
    console.log(array[index])
  }
  show(index) {
    const { array } = this.state;
    array[index].hide = false;
    this.setState({ array });
  }
render() {
    const { text , array ,currentIndex} = this.state; 
    return (
        
        <div className="App">
        <Container />
        <Heading />
        {/* {this.userInput()} */}
        
        <input type="text"  value={this.state.text} onChange={this.userInput} />
        <button onClick={() => this.submit()}> Add  </button>
        
    {text && <h1> You are typing {text.split('').reverse()} </h1> }
    <ul>
          {array.map((item, index) => {
            return (
              <li>
                {!item.hide && (
                  <p>
                    {item.text.split("").reverse()} | {item.data}
                  </p>
                )}
                {!item.hide ? (
                  <button onClick={this.hide.bind(this, index)}>Hide</button>
                ) : (
                  <button onClick={this.show.bind(this, index)}>Show</button>
                )}
              </li>
            );
          })}
        </ul>
      {/* {!currentUser && this.renderLogin()}
      {currentUser && !addForm && this.showTable()   }
      {currentUser && addForm && this.addEmployForm() } */}
      </div>
    );
  }
}

export default App;