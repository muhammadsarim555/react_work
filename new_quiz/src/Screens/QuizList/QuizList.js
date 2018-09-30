import React, { Component } from 'react';
import Timer from '../Timer/Timer';

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
      score: 0,
      timeFlag: false,
      // data : props.questions,
      // parentQuizName : props.quizParentName,
    };
    // this.renderQuestions = this.renderQuestions.bind(this);
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
    console.log(data.qArr.length -1 === counter);
    let val = document.querySelector("input[name='option']:checked");
    if (val === null) {
        alert("select anyone");
        // return false;
    }
    // else {
        // if (data.qArr[counter].answer === val.value) {
            // console.log("right");
            // counter+1;
        // }
        // else {
          // console.log("wrong");
        // }
      // }
        
      

    if ( data.qArr.length -0 === counter ){
    console.log("completed");
      // score = correct * 20;
      // document.getElementById("quizcontainer").style.display = "none";
      // document.getElementById("resultContainer").style.display = "block";
      // document.getElementById("score").innerHTML = "Your score is" + score + "%";

    }
  
    else{
        // alert("you can not do any thing else");
    console.log(data.qArr[counter].answer);
        

  return(
         <div id="next">
           <Timer timeFlag={this.state.timeFlag} />
        
            <h2> {data.qArr[counter].question} </h2>
            <label><input type="radio" name="option" value="1" /><span >{data.qArr[counter].option1}</span></label>
            <br/ >

            <label><input type="radio" name="option" value="2" /><span >{data.qArr[counter].option2}</span></label>
            <br/ >

            <label><input type="radio" name="option" value="3" /><span >{data.qArr[counter].option3}</span></label>
            <br/ >

            <label><input type="radio" name="option" value="4" /><span >{data.qArr[counter].option4}</span></label>
            <br/ >
            <br/><br/>
            <button 
            onClick={this.updateCounter.bind(this)}
            > Next </button>
              
            </div>
    );
  
  }
  //   // console.log(data.qArr[0].question);
  }

  // shouldComponentUpdate(p , s){
  //   console.log(s.boolean);
  //   s.boolean && this.renderQuestions()

  // //    this.state.boolean !== s.boolean
  // //   return this.renderQuizInfo()
  // //   // this.renderQuestions()
  //   return true;
  // }
  

  async updateBoolean(t){
    // this.props.getBoolean(t)
    await this.setState({
      boolean: true,
    })
  }

  renderQuizInfo() {
    const a = this.props.quizParentName;
    const data = this.props.data;
    // console.log(data);
    return (
      <div>
        <h1> this is {a} Quiz</h1>
        <h2> {a}: {data.name} </h2>
        <h2> Total Time is:  {data.time} </h2>
        <h2> Total Questions: {data.questions} </h2>
        <button  onClick={this.updateBoolean.bind(this, true)}>
    Start Quiz </button>
      </div>
    )
  
  }

  componentDidMount(){
    const {boolean} = this.state;
    boolean &&  this.renderQuestions()
  }


  render() {
    const { boolean, counter , timeFlag  } = this.state;
    // console.log(timeFlag);
    return (
      <div className="App">
        {!boolean && this.renderQuizInfo()}
        {/* {boolean &&  this.renderQuestions()} */}
        
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