import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: "Hello World!", 
      // condition: true,
    }
    this.handleClick = this.handleClick.bind(this, 'Parameter');
  }
  
  updateText(){
    this.setState({
      text : this.state.condition ? "Hello World " : "Hello Pakistan",
      condition: !this.state.condition,

    })
  }

  handleClick(param, e) {
    console.log('Parameter', param);
    console.log('Event', e);
  }
  

  navbar()
{
  return(
    <nav className="navbar navbar-dark indigo justify-content-center">
    <center>
    <span className="navbar-text white-text text">
        React Assignment 2 
    </span>
    {/* <span className="justify-content-right  posttext">
        Post By: Muhammad Sarim 
    </span> */}
    </center>
</nav>
  );
}

renderBodyQ1(){
  return (
    <div className="container">

        <h4  style={{textAlign: "center"}}>{this.state.text}!</h4>
        <center>
          <button  type="button"onClick={() => this.updateText()}  className="btn btn-elegant">Click For Toggle </button>
          </center>
          <hr/>
         
         </div>

  );
}
renderBodyQ2(){
  return(
  <div className="container">

  <h4  style={{textAlign: "center"}}>Question No 2 </h4>
  <center>
    <a  href="https://medium.com/@muhammadsarim555/how-many-ways-to-define-parameter-in-react-js-754d22ee2de5" target="_blank" >How to Pass Parameter in EventListener</a>
    </center>
    <hr/>
   
   </div>
  );
}


render() {
   "Using states, render a text Hello World, on clicking it, it should toggle to Hello Pakistan, and vice versa!"; 
  return(
      <div>

        {this.navbar() }{this.renderBodyQ1()} {this.renderBodyQ2()}
        {/* <button onClick={this.handleClick}>checking</button> */}

        </div>
    );
  


}
}

export default App;
