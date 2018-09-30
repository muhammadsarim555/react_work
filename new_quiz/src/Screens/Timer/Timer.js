import React, { Component } from 'react';
import QuizList from '../QuizList/QuizList';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sec: 5,
            min: 0,
            timeFlag: props.timeFlag,
            check: false,
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
                check: true,
            })
            this.getBoolean.bind(this , true)
        }
        // console.log(this.timer)
        return (
            <div>
                <h1>{min} : {sec}</h1>
            </div>

        )
    }
    
    componentWillUpdate(p, s) {
        timeFlag: s;
        // console.log(this.timer , "lifecycle")
    }

    result() {
        return (
            <div>
                <h2> Your result is --- </h2>
            </div>
        )
    }

    getBoolean(e){
        this.props.getBoolean()
        console.log(e)
    }

    render() {
        const { min, sec, timeFlag, check } = this.state;
        console.log(timeFlag);
        return (
            <div className='timer'>
                {!check ?
                    (this.startTimer())
                    :
                    this.result()
                }

                <div>
                    {/* {
                timeFlag  ?
                (this.result())
                :
                 (  <QuizList /> ,this.startTimer())
} */}
                </div>
            </div>
        )
    }
}


export default Timer;