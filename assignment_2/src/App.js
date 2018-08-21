import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: "Hello World!", 
    }
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
      
        <h1 style={{textAlign: "center" , backgroundColor: "blue"}}>{this.state.text}!</h1>
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
