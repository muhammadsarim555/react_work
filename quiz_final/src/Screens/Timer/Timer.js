import React, { Component } from 'react';
import QuizList from '../QuizList/QuizList';
import Result from '../Result/Result';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sec: 5,
            min: 0,
            check: true,
        }
    }



    componentWillUnmount() {
        clearInterval(this.timer)
    }


    tick() {
        this.setState({ count: (this.state.sec--) })
    }


    startTimer() {
        const { min, sec } = this.state;
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 800)
        if (this.state.sec === 0) {
            // alert("your time has been finished");
            clearInterval(this.timer)
            this.setState({
                check: false,
            })
            // this.getBoolean.bind(this, true);
        }
        // console.log(this.timer)
        return (
            <div>
                <h1>{min} : {sec}</h1>
            </div>

        )
    }



    render() {
        const { min, sec, timeFlag, check } = this.state;
        // console.log(timeFlag);
        return (
            <div className='timer'>
                {/* <Result/> */}
                {check ? this.startTimer() : <Result correctQuestions={this.props.correctQuestions} />}
                {/* {this.startTimer()} */}
            </div>
        )
    }
}


export default Timer;

// {!check ?
//     (this.startTimer())
//     // :
//     // this.result()
// // }

// <div>
//     {/* {
// timeFlag  ?
// (this.result())
// :
//  (  <QuizList /> ,this.startTimer())
// } */}
// </div>