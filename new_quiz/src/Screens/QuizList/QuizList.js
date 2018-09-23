import React, { Component } from 'react';

class QuizList extends Component {
  constructor(props) {
    super(props);
    const data = this.props.data;
    const getQuestion =  data.qArr;
    this.state = {
      // question: getQuestion[0].question,
      // opt1: getQuestion[0].option1,
      // opt2: getQuestion[0].option2,
      // opt3: getQuestion[0].option3,
      // opt4: getQuestion[0].option4,
      boolean: false,
      counter: 0,
      // data : props.questions,
      // parentQuizName : props.quizParentName,
    };
  }

  



  updateCounter(){
    const {counter} = this.state;
    this.setState({
        counter  : counter + 1
    })
    console.log(counter , "coundter");
}

  renderQuestions() {
    const data = this.props.data;
    const {counter} = this.state;
    console.log(data.qArr.length -1 === counter)
    console.log(data.qArr)
    if ( data.qArr.length -0 === counter ){
    console.log("completed");
      // alert("athis is your result");
    }
    else{
        // alert("you can not do any thing else");
    

  return(
        <div id="next">
            <h2> {data.qArr[counter].question} </h2>
            <h4> {data.qArr[counter].option1} </h4>
            <h4> {data.qArr[counter].option2} </h4>
            <h4> {data.qArr[counter].option3} </h4>
            <h4> {data.qArr[counter].option4} </h4>
            <br/><br/>
            <button 
            onClick={this.updateCounter.bind(this)}
            > Next </button>
              
            </div>
    );
  }
  //   // console.log(data.qArr[0].question);
  }


  


  renderQuizInfo() {
    const a = this.props.quizParentName;
    const data = this.props.data;
    // console.log(data);
    return (
      <div>
        <h2> he is a boy</h2>
        <h1> this is {a} Quiz</h1>
        <h2> {a}: {data.name} </h2>
        <h2> Total Time is:  {data.time} </h2>
        <h2> Total Questions: {data.questions} </h2>
        <button onClick={() => {
          this.setState({
            boolean: true,          })
        }}>
    Start Quiz </button>
      </div>
    )
  
  }

  render() {
    const { boolean, counter } = this.state;
    return (
      <div className="App">
        {!boolean && this.renderQuizInfo()}
        {boolean && this.renderQuestions()}
        {/* {boolean && <button id="next" onClick={this.renderQuestions.bind(this)} > Next </button> } */}
      </div>
    );
  }
}

export default QuizList;



//   updateCounter(){
//     const {counter} = this.state;
//     this.setState({
//         counter  : counter + 1
//     })
//     console.log(counter , "coundter");
// }