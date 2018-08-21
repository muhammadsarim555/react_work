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
    <nav className="navbar navbar-dark indigo">
    <center>
    <span className="navbar-text white-text text">
        React Assignment 2 
    </span>
    {/* <span className=" posttext">
        Post By: Muhammad Sarim 
    </span> */}
    </center>
</nav>
  );
}

renderBody(){
  return (
  <div className="container">

        <h4  style={{textAlign: "center"}}>{this.state.text}!</h4>
        <center>
          <button  type="button"onClick={() => this.updateText()}  className="btn btn-elegant">Click For Toggle </button>
          </center>
         </div>
  );
}


render() {
   "Using states, render a text Hello World, on clicking it, it should toggle to Hello Pakistan, and vice versa!"; 
  return(
      <div>

        {this.navbar() }{this.renderBody()}

        </div>
    );
  


}
}

export default App;
