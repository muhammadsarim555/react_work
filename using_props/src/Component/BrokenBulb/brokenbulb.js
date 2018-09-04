import React, { Component } from 'react';
// import './../../App.css';
import logo from './../../off.jpg';


class Bulb extends Component {
  
 
  render() {
    console.log(this.props)
    return (
      <div className="app"> 
      <h3>{this.props.content}  </h3>
      <button onClick={this.props.work} >Next Page </button>
      <button onClick={this.props.forFalse}> Logout </button>

    </div>
    );
  }
}

export default Bulb;
