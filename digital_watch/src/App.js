import React, { Component } from 'react';
import logo from './image.jpg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {time: new Date()}
    console.log(this.state.time)
    this.todayTime()
  }
      
todayTime(){
setInterval(()=>{
  this.setState({
    time : new Date(),
  })
} ,1000)
}

// componentWillCount(){
//   setInterval(()=>{
//     this.todayTime()
//   } , 1000)
// }
   
    
  render() {
       const a = "React Digital Watch " 

    return (
      <div>
      <h3 className="h3">{a}</h3>
     
      <div id="watch"> 
        <div className="border"> 
      <p className="ditit">{this.state.time.toLocaleTimeString()}</p>
      {/* </div> */}
      </div>
      </div>
       </div>
    );
  }
}

export default App;
