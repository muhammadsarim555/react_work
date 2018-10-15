import React, { Component } from 'react';
import Timer from '../Timer/Timer';
import QuizList from '../QuizList/QuizList';


class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
    // correctQuestions: props.correctQuestions,
    };
  }


  // componentWillReceiveProps(p,s){
  //   this.setState({ correctQuestions: p})
  //   // console.log(this.state.correctQuestions)
  // }

renderFunction(){
  let correctQuestions = this.props.correctQuestions;
  return (
    <div className="App">
     <h1> Your Result is {correctQuestions}%. </h1>
    </div>
  );
}


render(){
  return (
    <div className="App">
     {
       this.renderFunction()
     }
    </div>
  );
}
}

export default Result;


