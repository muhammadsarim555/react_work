import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: "Hello World!", 
      // condition: true,
    }
  }

  updateText(){
    this.setState({
      text : this.state.condition ? "Hello World " : "Hello Pakistan",
      condition: !this.state.condition,

    })
  }

  navbar()
{
  return(
    <div id="navbar"> 
        <h4> React Assignment 2 </h4>
      </div>
  );
}

renderBody(){
  return (
  <div className="container">
      
        <h1  style={{textAlign: "center"}}>{this.state.text}!</h1>
          <button  type="button"onClick={() => this.updateText()}>Click For Toggle </button>
         </div>
  );
}


render() {
    return(
      <div>

        {this.navbar() }{this.renderBody()}

        </div>
    );
  


}
}

export default App;
