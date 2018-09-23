import React, { Component } from 'react';
import logo from './logo.svg';
import QuizList from './Screens/QuizList/QuizList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      quizzes: [

        {
          name: 'HTML',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '3', time: '60', score: false,
              qArr: [
                {
                  question: "what is use for image insertion",
                  option1: "img",
                  option2: "h1",
                  option3: "none",
                  option4: "body",
                  answer: "1"
                },
                {
                  question: "to underline the text",
                  option1: "u",
                  option2: "underline",
                  option3: "style",
                  option4: "none",
                  answer: "1"
                },
                {
                  question: "what is use for image insertion",
                  option1: "img",
                  option2: "h1",
                  option3: "none",
                  option4: "body",
                  answer: "1"
                },{
                  question: "what is use for image insertion",
                  option1: "img",
                  option2: "h1",
                  option3: "none",
                  option4: "body",
                  answer: "1"
                },
                {

                  question: "HTML stands for?",
                  option1: "HYPER TEXT MARKUP LANGUAGE'",
                  option2: "HTPER TEXT TELESCOPR",
                  option3: "HELP TEXT TERMINAL LANGUAGE",
                  option4: "NONE",
                  answer: "1"
                },

              ]
            },
            {
              name: 'Quiz 2', questions: '3', time: '40', score: false,
              qArr: [
                {
                  question: "html use for",
                  option1: "structure",
                  option2: "styling",
                  option3: "scripting",
                  option4: "none",
                  answer: "1"
                },
                {
                  question: "to underline the text",
                  option1: "u",
                  option2: "underline",
                  option3: "style",
                  option4: "none",
                  answer: "1"
                },
                {

                  question: "HTML stands for?",
                  option1: "HYPER TEXT MARKUP LANGUAGE'",
                  option2: "HTPER TEXT TELESCOPR",
                  option3: "HELP TEXT TERMINAL LANGUAGE",
                  option4: "NONE",
                  answer: "1"
                }
              ]
            },
          ]
        },
        {
          name: 'CSS',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '6', time: '60', score: false,
              qArr: [
                {
                  question: "Css stands for?",
                  option1: "cascading style sheet'",
                  option2: "cascade sheet style",
                  option3: "color style sheet",
                  option4: "contrast style sheet",
                  answer: "1"
                },
                {
                  question: "to change the color we use",
                  option1: "color:",
                  option2: "setColor:",
                  option3: "color-style",
                  option4: "change-color",
                  answer: "1"
                },
                {
                  question: "how to link css",
                  option1: "using link",
                  option2: "using button",
                  option3: "using javascript",
                  option4: "using img",
                  answer: "1"
                },
                {
                  question: "to change the color we use",
                  option1: "color:",
                  option2: "setColor:",
                  option3: "color-style",
                  option4: "change-color",
                  answer: "1"
                },
                {
                  question: "how to link css",
                  option1: "using link",
                  option2: "using button",
                  option3: "using javascript",
                  option4: "using img",
                  answer: "1"
                },
                {
                  question: "how to link css",
                  option1: "using link",
                  option2: "using button",
                  option3: "using javascript",
                  option4: "using img",
                  answer: "1"
                },

              ]
            },
          ]
        },
        {
          name: 'JavaScript',
          subQuiz: [
            {
              name: 'Quiz 1', questions: '4', time: '60', score: false,
              qArr: [
                {
                  question: "How to create alert box?",
                  option1: "alert='hello world'",
                  option2: "aler('hello world')",
                  option3: "alert.('hello world')",
                  option4: "alert('hello world')",
                  answer: "4"
                },
                {

                  question: "How to initialize variable?",
                  option1: "variable name = 'ali'",
                  option2: "var name = 'ali'",
                  option3: "variable: 'ali'",
                  option4: "variable. 'ali'",
                  answer: "2"
                },
                {

                  question: "How to push value in array?",
                  option1: "arr.push(value)",
                  option2: "arr.push.value",
                  option3: "arr.(value)",
                  option4: "arr.value.push(value)",
                  answer: "1"
                },
                {

                  question: "What is javascript?",
                  option1: "programming language",
                  option2: "scripting language",
                  option3: "coding language",
                  option4: "web language",
                  answer: "2"
                },
              ]
            },
            {
              name: 'Quiz 2', questions: '6', time: '40', score: false,
              qArr: [
                {

                  question: "Which creates random number?",
                  option1: "Math.floor()",
                  option2: "Math.ceil()",
                  option3: "Math.random()",
                  option4: "Math.high",
                  answer: "3"
                },
                {

                  question: "What does array returns?",
                  option1: "function",
                  option2: "object",
                  option3: "index number",
                  option4: "data type",
                  answer: "2"
                },
                {

                  question: "Object property name & value are separated by?",
                  option1: "semicolon ;",
                  option2: "colon :",
                  option3: "dot .",
                  option4: "comma ,",
                  answer: "2"
                },
                {

                  question: "Object properties are separated by?",
                  option1: "comma ,",
                  option2: "dot .",
                  option3: "colon :",
                  option4: "semicolon ;",
                  answer: "1"
                },
                {

                  question: "What is the correct syntax for object initialization?",
                  option1: "var var_name = {property_name:property_value}",
                  option2: "var var_name = {property_value:property_name}",
                  option3: "var var_value = {property_name:property_value}",
                  option4: "object = {property_name:property_value}",
                  answer: "1"
                },
                {

                  question: "DOM stands for?",
                  option1: "document object modification",
                  option2: "document observed module",
                  option3: "document object model",
                  option4: "document object module",
                  answer: "3",
                },
              ]
            },
          ]
        },

      ],
      data: null,
      flag: false,
      quizParentName: '',
    }
  }

getIndex(p,c){
  const {data} = this.state;
  // console.log('parent' ,p );
  // console.log('==========' );
  // console.log('child' ,c );
  this.setState({
    data: c,
    flag: true,
    quizParentName: p,
  })
  // console.log(this.state.quizParentName, "here is data ???")

}


  renderQuizName(){
    const {quizzes, data} = this.state;

    return(
      <div>
            {
              quizzes.map((quizName , quizNameI)=>{
                     return <ul> 
                       <li key={quizNameI}> {quizName.name} </li>
                  {
                    quizName.subQuiz.map((quizess , quizessInd)=>{
                      // console.log(v.name);

                      return   <li key={quizessInd}> {quizess.name} 
                        <button onClick={this.getIndex.bind(this, quizName.name , quizess)}> Next </button>
                       </li>
                    })
                  }
                  </ul>
                
              })

            }
             </div>

    )
  }



  render() {
    const {quizzes, data , flag} = this.state;
    // console.log(quizzes.name);    
    return (
      <div className="App">
          {!flag && this.renderQuizName()}
           {flag && <QuizList data={this.state.data} getIndex={this.getIndex.bind(this)} quizParentName={this.state.quizParentName} / > }
        </div>
    );
  }
}

export default App;
