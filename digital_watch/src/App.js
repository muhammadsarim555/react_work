import React, { Component } from 'react';
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
         <div className = "content" > 
      <h3 className="h3">{a}</h3>
      
      <h3>{this.state.time.toLocaleTimeString()}</h3>
       </div>
    );
  }
}

export default App;
