import React, { Component } from 'react';
import QuizList from  '../QuizList/QuizList';
class Timer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sec: 5 ,
             min: 0 ,
             timeFlag: props.timeFlag,
}
      }
      componentWillUnmount () {
        clearInterval(this.timer)
      }
      tick () {
          this.setState({count: (this.state.sec --)})
      }
      startTimer () {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 800)
        if(this.state.sec === 0 ){
            // alert("your time has been finished");
            clearInterval(this.timer)
            this.setState({
                timeFlag : true,
            })
                }
                // console.log(this.timer)
            }
            componentWillUpdate(p, s){
                timeFlag: s;
                // console.log(this.timer , "lifecycle")
            }

      result(){
          return(
              <div>
              <h2> Your result is --- </h2>
              </div>
          )
      }
      render () {
          const {min , sec , timeFlag} = this.state;
          console.log(timeFlag);
        return (
          <div className='timer'>
            <h1>{min} : {sec}</h1>
            <div>
 {
                timeFlag  ?
                (this.result())
                :
                 (  <QuizList /> ,this.startTimer())
}
            </div>
          </div>
        )
      }
    }
    

export default Timer;
