import React, { Component } from 'react';

class QuizList extends Component {
 constructor(props){
     super(props);
     this.state = {

     }
 }
   

 gettingIndex(index){
    console.log(index)
 }

render() {
    const {quizzes} = this.props;
        return (
            <div className="app">
                    <ul>
            {
                quizzes.map((v, i)=> {
                    // console.log(v)
                    return <li key={i}>{v.name }
                    <button onClick={this.props.buttonIndex.bind(this , i)}> Take Test </button>
                    </li> 
                })
            }
            </ul>             
                </div>
        );
    }
}
export default QuizList;
