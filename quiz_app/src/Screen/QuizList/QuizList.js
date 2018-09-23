import React, { Component } from 'react';
import Timer from '../Timer/Timer';

class QuizList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_list: [
                { quizName: "HTML", tests: 2 },
                { quizName: "CSS", tests: 1 },
                { quizName: "JAVASCRIPT", tests: 3 }
            ],
            quiz_info: [
                {
                    quizName: "HTML",
                    tests: [
                        {
                            name: "Test 1",
                            questions: 5,
                            time: 60,
                            quiz_questions: [
                                {
                                    quiz: "What is abbreviation of HTML?",
                                    option1: "Hyper Type Multi Language",
                                    option2: "Higher Text Multiple Language",
                                    option3: "Hyper Text Markup Language",
                                    option4: "Hollow Type Markup Language ",
                                    answer: "3"
                                },
                                {
                                    quiz: "How many types of markup in HTML?",
                                    option1: "Both",
                                    option2: "1 - opening and closing markup only",
                                    option3: "1 - self closing markups only",
                                    option4: "None of above",
                                    answer: "1"
                                },
                                {
                                    quiz: "<iframe> is HTML5 markup",
                                    option1: "False",
                                    option2: "True",
                                    option3: "Neither true nor false",
                                    option4: "Not Sure",
                                    answer: "2"
                                },
                                {
                                    quiz: "<div> and <span> are inline elements?",
                                    option1: "True",
                                    option2: "False",
                                    option3: "Neither True nor false",
                                    option4: "None of above",
                                    answer: "3"
                                },
                                {
                                    quiz: "HTML must need body markup. Why? Because:",
                                    option1: "It did'nt needs to show the markups inside it.",
                                    option2: "It needs to show the markups inside it.",
                                    option3: "It needs <head> element",
                                    option4: "None of above",
                                    answer: "2"
                                }
                            ]
                        },
                        {
                            name: "Test 2",
                            questions: 10,
                            time: 120,
                            quiz_questions: [
                                {
                                    quiz:
                                        "The external JavaScript file must contain the <script> tag.",
                                    option1: "True",
                                    option2: "False",
                                    option3: "Neither true nor false",
                                    option4: "None of above",
                                    answer: "1"
                                },
                                {
                                    quiz:
                                        "Choose the correct HTML element for the largest heading:",
                                    option1: "<h6>",
                                    option2: "<heading>",
                                    option3: "<h1>",
                                    option4: "<head>",
                                    answer: "3"
                                },
                                {
                                    quiz:
                                        "What is the correct HTML element for inserting a line break?",
                                    option1: "<break>",
                                    option2: "<br>",
                                    option3: "<lnbr>",
                                    option4: "none of above",
                                    answer: "2"
                                },
                                {
                                    quiz:
                                        "What is the correct HTML for adding a background color?",
                                    option1: "<background>yellow</background>",
                                    option2: '<body style="bg-color:yellow;">',
                                    option3: '<body bg="yellow">',
                                    option4: '<body style="background-color:yellow;">',
                                    answer: "4"
                                },
                                {
                                    quiz:
                                        "Choose the correct HTML element to define important text",
                                    option1: "<strong>",
                                    option2: "<b>",
                                    option3: "<important>",
                                    option4: "<i>",
                                    answer: "1"
                                },
                                {
                                    quiz:
                                        "Choose the correct HTML element to define emphasized text",
                                    option1: "<i>",
                                    option2: "<emphasize>",
                                    option3: "<italic>",
                                    option4: "<em>",
                                    answer: "4"
                                },
                                {
                                    quiz: "What is the correct HTML for creating a hyperlink?",
                                    option1: "<a>http://www.w3schools.com</a>",
                                    option2: ' <a href="http://www.w3schools.com">W3Schools</a>',
                                    option3:
                                        '<a name="http://www.w3schools.com">W3Schools.com</a>',
                                    option4:
                                        '<a url="http://www.w3schools.com">W3Schools.com</a>',
                                    answer: "2"
                                },
                                {
                                    quiz: "Which character is used to indicate an end tag?",
                                    option1: "<",
                                    option2: "*",
                                    option3: "/",
                                    option4: "^",
                                    answer: "3"
                                },
                                {
                                    quiz: "How can you open a link in a new tab/browser window?",
                                    option1: '<a href="url" new>',
                                    option2: '<a href="url" target="_blank">',
                                    option3: '<a href="url" target="new">',
                                    option4: '<a href="url" target="new_blank">',
                                    answer: "2"
                                },
                                {
                                    quiz: "Which of these elements are all <table> elements?",
                                    option1: "<table><head><tfoot>",
                                    option2: "<table><tr><td>",
                                    option3: "<table><tr><tt>",
                                    option4: "<thead><body><tr>",
                                    answer: "2"
                                }
                            ]
                        }
                    ]
                },
                {
                    quizName: "CSS",
                    tests: [
                        {
                            name: "Test 1",
                            questions: 10,
                            time: 120,
                            quiz_questions: [
                                {
                                    quiz: "What does CSS stand for?",
                                    option1: "Colorful Style Sheets",
                                    option2: "Creative Style Sheets",
                                    option3: "Cascading Style Sheets",
                                    option4: "Computer Style Sheets",
                                    answer: "3"
                                },
                                {
                                    quiz:
                                        "Where in an HTML document is the correct place to refer to an external style sheet?",
                                    option1: "In the <head> section",
                                    option2: "At the end of the document",
                                    option3: "In the <body> section",
                                    option4: "None of above",
                                    answer: "1"
                                },
                                {
                                    quiz:
                                        "Which HTML tag is used to define an internal style sheet?",
                                    option1: "<script>",
                                    option2: "<style>",
                                    option3: "<css>",
                                    option4: "<pre>",
                                    answer: "2"
                                },
                                {
                                    quiz: "Which is the correct CSS syntax?",
                                    option1: "{body;color:black;}",
                                    option2: "body:color=black;",
                                    option3: "{body:color=black;}",
                                    option4: "body {color: black;}",
                                    answer: "4"
                                },
                                {
                                    quiz: "How do you insert a comment in a CSS file?",
                                    option1: "' this is a comment",
                                    option2: "// this is a comment",
                                    option3: "// this is a comment //",
                                    option4: "/* this is a comment */",
                                    answer: "4"
                                },
                                {
                                    quiz:
                                        "Which property is used to change the background color?",
                                    option1: "color",
                                    option2: "bgcolor",
                                    option3: "background-color",
                                    option4: "backgroundColor",
                                    answer: "3"
                                },
                                {
                                    quiz: "Which CSS property controls the text size?",
                                    option1: "font-size",
                                    option2: "text-style",
                                    option3: "text-size",
                                    option4: "font-style",
                                    answer: "1"
                                },
                                {
                                    quiz:
                                        "What is the correct CSS syntax for making all the <p> elements bold?",
                                    option1: '<p style="text-size:bold;">',
                                    option2: "p {text-size:bold;}",
                                    option3: '<p style="font-size:bold;">',
                                    option4: "p {font-weight:bold;}",
                                    answer: "4"
                                },
                                {
                                    quiz: "How do you display hyperlinks without an underline?",
                                    option1: "a {decoration:no-underline;}",
                                    option2: "a {text-decoration:no-underline;}",
                                    option3: "a {underline:none;}",
                                    option4: "a {text-decoration:none;}",
                                    answer: "4"
                                },
                                {
                                    quiz:
                                        "How do you make each word in a text start with a capital letter?",
                                    option1: "transform:capitalize",
                                    option2: "text-transform:capitalize",
                                    option3: "You can't do that with CSS",
                                    option4: "text-style:captialize",
                                    answer: "2"
                                }
                            ]
                        }
                    ]
                },
                {
                    quizName: "JAVASCRIPT",
                    tests: [
                        {
                            name: "Test 1",
                            questions: 5,
                            time: 60,
                            quiz_questions: [
                                {
                                    quiz:
                                        'What is the correct JavaScript syntax to change the content of this <p id="demo">This is a demonstration.</p> HTML element?',
                                    option1:
                                        'document.getElementByName("p").innerHTML = "Hello World!";',
                                    option2:
                                        'document.getElement("p").innerHTML = "Hello World!";',
                                    option3:
                                        'document.getElementById("demo").innerHTML = "Hello World!";',
                                    option4: '#demo.innerHTML = "Hello World!";',
                                    answer: "3"
                                },
                                {
                                    quiz: "Where is the correct place to insert a JavaScript?",
                                    option1:
                                        "Both the <head> section and the <body> section are correct",
                                    option2: "The <body> section",
                                    option3: "The <head> section",
                                    option4: "afer the <!DOCTYPE html> declaration",
                                    answer: "1"
                                },
                                {
                                    quiz: 'How do you write "Hello World" in an alert box?',
                                    option1: 'alert("Hello World");',
                                    option2: 'alertBox("Hello World");',
                                    option3: 'msgBox("Hello World");',
                                    option4: 'msg("Hello World");',
                                    answer: "1"
                                },
                                {
                                    quiz: "How do you create a function in JavaScript?",
                                    option1: "function = myFunction()",
                                    option2: "function myFunction()",
                                    option3: "function : myFunction()",
                                    option4: "function => myFunction()",
                                    answer: "2"
                                },
                                {
                                    quiz: "How to write an IF statement in JavaScript?",
                                    option1: "if i = 5 then",
                                    option2: "if i = 5",
                                    option3: "if (i == 5)",
                                    option4: "if i == 5 then",
                                    answer: "3"
                                }
                            ]
                        },
                        {
                            name: "Test 2",
                            questions: 6,
                            time: 120,
                            quiz_questions: [
                                {
                                    quiz:
                                        'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
                                    option1: "if i <> 5",
                                    option2: "if (i != 5)",
                                    option3: "if (i <> 5)",
                                    option4: "if i =! 5 then",
                                    answer: "2"
                                },
                                {
                                    quiz: "How does a WHILE loop start?",
                                    option1: "while (i <= 10; i++)",
                                    option2: "while i = 1 to 10",
                                    option3: "while (i <= 10)",
                                    option4: "none of above",
                                    answer: "3"
                                },
                                {
                                    quiz: "How does a FOR loop start?",
                                    option1: "for (i = 0; i <= 5; i++)",
                                    option2: "for i = 1 to 5",
                                    option3: "for (i = 0; i <= 5)",
                                    option4: "for (i <= 5; i++)",
                                    answer: "1"
                                },
                                {
                                    quiz: "How can you add a comment in a JavaScript?",
                                    option1: "//This is a comment",
                                    option2: "<!--This is a comment-->",
                                    option3: "'This is a comment",
                                    option4: "#This is a comment#",
                                    answer: "1"
                                },
                                {
                                    quiz: "What is the correct way to write a JavaScript array?",
                                    option1: 'var colors = "red", "green", "blue"',
                                    option2:
                                        'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
                                    option3: 'var colors = (1:"red", 2:"green", 3:"blue")',
                                    option4: 'var colors = ["red", "green", "blue"]',
                                    answer: "4"
                                },
                                {
                                    quiz:
                                        "How do you round the number 7.25, to the nearest integer?",
                                    option1: "Math.rnd(7.25)",
                                    option2: "rnd(7.25)",
                                    option3: "Math.round(7.25)",
                                    option4: "round(7.25)",
                                    answer: "3"
                                }
                            ]
                        },
                        {
                            name: "Test 3",
                            questions: 5,
                            time: 60,
                            quiz_questions: [
                                {
                                    quiz:
                                        "How do you find the number with the highest value of x and y?",
                                    option1: "Math.ceil(x, y)",
                                    option2: "Math.max(x, y)",
                                    option3: "top(x, y)",
                                    option4: "ceil(x, y)",
                                    answer: "1"
                                },
                                {
                                    quiz:
                                        'What is the correct JavaScript syntax for opening a new window called "w2" ?',
                                    option1: 'w2 = window.new("http://www.w3schools.com");',
                                    option2: 'w2 = window.open("http://www.w3schools.com");',
                                    option3: 'w2 = window.create("http://www.w3schools.com");',
                                    option4: "none of above",
                                    answer: "2"
                                },
                                {
                                    quiz: "JavaScript is the same as Java.",
                                    option1: "True",
                                    option2: "False",
                                    option3: "Neither true nor false",
                                    option4: "none of above",
                                    answer: "2"
                                },
                                {
                                    quiz:
                                        "Which event occurs when the user clicks on an HTML element?",
                                    option1: "onmouseclick",
                                    option2: "onmouseover",
                                    option3: "onchange",
                                    option4: "onclick",
                                    answer: "4"
                                },
                                {
                                    quiz: "How do you declare a JavaScript variable?",
                                    option1: "v carName;",
                                    option2: "variable carName;",
                                    option3: "var carName;",
                                    option4: "variables carName;",
                                    answer: "3"
                                }
                            ]
                        }
                    ]
                }
            ],

            info: null,
            boolean: false,
            newState: '',
            quizList: false,
            load: 0,
            min: 1,
            sec: 60,
            correct: 0,
            currentTestIndex: null,
            currentObject: null,
         
        };

    }

    gettingIndex(index) {
        const { quiz_info, newState } = this.state;
        //    console.log(quiz_info)
        this.setState({ newState: quiz_info[index], boolean: true })
        console.log(quiz_info[index] , "quiz info" );
        // console.log(newState , "????")

    }


    //  render test list
    renderList() {
        const { quiz_info, quiz_list } = this.state;
        return (
            <div>
                {
                    quiz_list.map((value, index) => {
                        // console.log(quiz_info)
                        return <li key={index}>{value.quizName}

                            {/* <h5> {value.quizName} </h5> 
                            <p> It has {value.tests} </p> */}
                            <button onClick={this.gettingIndex.bind(this, index)} >
                                Take Test </button> </li>
                    })
                }
            </div>
        );
    }

    // getting button index number
    getButtonIndex(i) {
        const { quizList } = this.state;
        this.setState({
            quizList: true,
        })
        console.log(i, 'getButtonIndex');

    }

    //  ? here rendring quiz information 

    renderInfo() {
        const { quiz_info, quiz_list, info, newState, currentTestIndex , currentObject } = this.state;
    
        return (
            <div>
                {
                    newState.tests.map((value, index) => {
                        // return <li> {value.tests} </li>
                        console.log(value.quiz_questions, "item");



                        // console.log(value.quiz_questions[0].option1)
                        // console.log(value.quiz_questions[0].option2)
                        // console.log(value.quiz_questions[0].option3)
                        // console.log(value.quiz_questions[0].option4)
                        return <div>
                            <h3>Welcome to {newState.quizName} test</h3>
                            <h3>Total Questions {value.questions} test</h3>
                            <h3>Total Time {value.time} test</h3>
                            <h3> {value.name} </h3>
                            <button
                            onClick={() => { this.setState({
                                currentTestIndex : index,
                                
                            })}}
                            >Start Quiz {value.name}  </button>
                            {console.log(currentTestIndex)}






                            {/* <h4> {value.quiz_questions[index].quiz} </h4> */}
                            {/* <label><input type="radio" name="option" value="1" /><span id="option1">{value.quiz_questions[index].option1}</span></label><br/>
                            <label><input type="radio" name="option" value="2" /><span id="option2">{value.quiz_questions[index].option2}</span></label><br/>
                            <label><input type="radio" name="option" value="3" /><span id="option3">{value.quiz_questions[index].option3}</span></label><br/>
                            <label><input type="radio" name="option" value="4" /><span id="option4">{value.quiz_questions[index].option4}</span></label><br/> */}
                            {/* <button onClick={this.next.bind(this , index)} >Next </button> */}



                                {/* <h2 key={index}>{value.name} <button
                                onClick={this.getButtonIndex.bind(this, index + 1)}
                            >Start Now  </button> </h2> */}
                                {/* <li> {value.quiz_questions} </li> */}
                        </div>
                            })
                }
                <button onClick={this.backButton.bind(this)} >Back </button>

                        </div>
        );
                }

    // start quiz for render question

    // startQuiz() {
                    //     const { newState, quizList , quiz_questions } = this.state;
                    //     console.log(newState, 'newState');
                    //     return (
                    //         <div>
                    //             {
                    //                 newState.tests.map((v, i) => {
                    //                     // console.log(v , "v")
                    //                     return (
                    //                         v.quiz_questions.map((q, qN) => {
                    //                                 // console.log(q[0] , "kiun");
                    //                             //  return <div>
                    //                             //  <h2> {q.quiz} </h2>
                    //                             //     <input type="radio" value='1' name='option' />{q.option1}<br/>
                    //                             //     <input type="radio" value='2' name='option' />{q.option2}<br/>
                    //                             //     <input type="radio" value='3' name='option' />{q.option3}<br/>
                    //                             //     <input type="radio" value='4' name='option' />{q.option4} <br/>
                    //                             //     <button>Next </button>
                    //                             // </div> 
                    //                             let a = q.quiz;
                    //                             // console.log(q.quiz)
                    //                             // console.log(q.option1)
                    //                             // console.log(q.option2)
                    //                             // console.log(q.option3)
                    //                             // console.log(q.option4)
                    //                             // return <li> {q.quiz} </li>
                    //                         })
                    //                     )
                    //                 })
                    //             }

                    //         </div>
                    //     );
                    // }


                    // back Button for going to dashboard
                    backButton() {
                const {boolean} = this.state;
        this.setState({
                    boolean: false,
        })
        return (
            <div>
                </div>
                )
    }

//  next Button
// nextButton(){
//     const {correct , load , quiz_list , newState} = this.state;
//     console.log(quiz_list , "quiz_list")  
//     var val = document.querySelector("input[name='option']:checked");
//     if (val === null) {
//         alert("select anyone");
//     }
// //     else {
// //         if (questions[load].answer === val.value) {
// // console.log(questions[load].answer)
            
// //             console.log("right");
// //             correct++;
// //         }
//         else {
//             console.log("wrong");
            
//         }

// }


next(i){
    console.log("textIndex" , i);
    // this.renderInfo(i)
}

    render() {
        const {boolean, quizList, currentTestIndex , quiz_list } = this.state;
        return (
            <div className="App">
                    {/* */}
                    {!boolean && this.renderList()}
                    {boolean && !quizList &&  this.renderInfo()}
                    {/* {quizList && this.nextButton()} */}
                </div>
                );
    }
}

export default QuizList;
