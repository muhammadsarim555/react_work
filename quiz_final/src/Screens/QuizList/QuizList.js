import React, { Component } from 'react';
import Timer from '../Timer/Timer';
import Result from '../Result/Result';

var dekhteHainBhai = document.getElementById('next-button');

class QuizList extends Component {
  constructor(props) {
    super(props);
    const data = this.props.data;
    const getQuestion = data.qArr;
    console.log(getQuestion, "questions")
    this.state = {
      boolean: false,
      counter: 0,
      score: 0,
      timeFlag: false,
      correctQuestions: 1,
      boolenFromTimer: true,
    };
  }

  // give correntQustions to parent
  check(e) {
    this.props.getCorretQuestions(e)
  }

  updateCounter() {
    const data = this.props.data;
    const { counter, correctQuestions } = this.state;
    let val = document.querySelector("input[name='option']:checked");

    if (val === null) {
      alert("seltct it now");
      return false
    }
    else {
      if (data.qArr[counter].answer === val.value) {
        // console.log(data.qArr[counter].answer)

        console.log("right");
        this.setState({
          counter: counter + 1,
          correctQuestions: 1 + correctQuestions,
        })
      }
      else {
        console.log("wrong");
        this.setState({
          counter: counter + 1
        })
      }
    }
    // console.log("correntQustions ==>", correctQuestions * 33 );
    this.check(correctQuestions * 33)
  }


   renderQuestions()  {
    const data = this.props.data;
    // console.log(this.props.correctQuestions)
    const { counter } = this.state;
    // console.log(data.qArr.length -1 === counter);
    let val = document.querySelector("input[name='option']:checked");


    if (data.qArr.length - 0 === counter) {
      // console.log("completed");
      return <Result timeFlag={this.state.timeFlag} correctQuestions={this.props.correctQuestions} />


    }

    else {

      return (
        <div>
          {this.questionsMathod()}
          {/* <Result timeFlag={this.state.timeFlag} correctQuestions={this.props.correctQuestions} /> */}
        </div>
      )



    }
    //   // console.log(data.qArr[0].question);
  }


  questionsMathod() {
    const data = this.props.data;
    // console.log(this.props.correctQuestions)
    const { counter } = this.state;
    // console.log(data.qArr.length -1 === counter);
    let val = document.querySelector("input[name='option']:checked");


    return (
      <div id="next">

        {/* <Timer correctQuestions={this.props.correctQuestions} getBooleanFromTimer={this.getBooleanFromTimer.bind(this)} /> */}


        <h2> {data.qArr[counter].question} </h2>
        <label><input type="radio" name="option" value="1" /><span >{data.qArr[counter].option1}</span></label>
        <br />

        <label><input type="radio" name="option" value="2" /><span >{data.qArr[counter].option2}</span></label>
        <br />

        <label><input type="radio" name="option" value="3" /><span >{data.qArr[counter].option3}</span></label>
        <br />

        <label><input type="radio" name="option" value="4" /><span >{data.qArr[counter].option4}</span></label>
        <br />
        <br /><br />
        <button id="next-button"
          onClick={this.updateCounter.bind(this)}
        > Next </button>
      </div>
    );
  }


  // shouldComponentUpdate(p , s){
  //   console.log(s.boolean);
  //   s.boolean && this.renderQuestions()

  // //    this.state.boolean !== s.boolean
  // //   return this.renderQuizInfo()
  // //   // this.renderQuestions()
  //   return true;
  // }


  async updateBoolean(t) {
    await this.setState({
      boolean: true,
    })
  }

  renderQuizInfo() {
    const a = this.props.quizParentName;
    const data = this.props.data;
    return (
      <div>
        <h1> this is {a} Quiz</h1>
        <h2> {a}: {data.name} </h2>
        <h2> Total Time is:  {data.time} </h2>
        <h2> Total Questions: {data.questions} </h2>
        <button onClick={this.updateBoolean.bind(this, true)}>
          Start Quiz </button>
      </div>
    )

  }


  getBooleanFromTimer(e) {
    console.log(e, "here is accept props");
    boolenFromTimer: e

    // this.setState({
    //   boolean: e,
    // })
    // console.log(this.state.boolean, "here is boolean");
  }

  // componentDidMount() {
  //   const { boolean } = this.state;
  //   boolean && this.renderQuestions()
  // }


  render() {
    const { boolean, counter, timeFlag, boolenFromTimer } = this.state;
    // console.log("I am Render ");

    // console.log(timeFlag);
    return (
      <div className="App">
        {!boolean && this.renderQuizInfo()}
        {boolean && this.renderQuestions()}

        {/* {dekhteHainBhai.disabled = true} */}
        {/* {boolean && <button id="next" onClick={this.renderQuestions.bind(this)} > Next </button> } */}
      </div>
    );
  }
}

export default QuizList;


