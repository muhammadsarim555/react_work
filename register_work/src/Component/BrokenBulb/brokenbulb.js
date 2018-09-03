import React, { Component } from 'react';
// import './../../App.css';

class Bulb extends Component {
  constructor(){
    super()
    this.state = {
      email : "",
      password : "",
    }

  }
  updateValue(){
    this.setState({
      // email : 
    })
  }
  render() {
    const {name , work} = this.props;
    console.log(this.props)
    return (
      <div className="app"> 
      {/* <h2>I am Muhammad Sarim WElcome To EasyTech </h2> */}
      <h3> I am Muhammad {name} and I work  {work}  </h3>
      {this.props.chilen}

    </div>
    );
  }
}

export default Bulb;
