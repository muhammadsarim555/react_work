import React, { Component } from 'react';
import logo from './on.webp';
import './App.css';
import Bulb from "./Component/BrokenBulb/brokenbulb.js"
class App extends Component {
  constructor(){
    super();
    this.state = {
      cu :false,
}
// this.page = this.page.bind(this)
}

  
page(){
    this.setState({cu: true});
    console.log(this.state.cu)
  } 

  forFalse(){
    this.setState({
      cu: false,
    })
  } 



  render() {
    const {cu} = this.state;
    return (
      <div className="app">
      {/* <img src={this.state.img} width="150px" height="150px" /> */}
      {cu &&  <h3 >Welcome to karachi  </h3>}
      {cu &&<Bulb forFalse={this.forFalse.bind(this)} />}
    
       {/* <Bind forFalse={this.forFalse.bind(this)} /> */}
    {!cu && <Bulb work={this.page.bind(this)}  content="Muhammad Sarim" />}
    {/* {cu && <Bulb forFalse={this.forFalse.bind(this)} />} */}
{/* <button onClick={this.page.bind(this)}>CLick me fir test</button> */}

    <br/>

      

    </div>
    );
  }
}

export default App;
