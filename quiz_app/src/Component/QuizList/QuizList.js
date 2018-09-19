import React, { Component } from 'react';

class QuizList extends Component {
  
 

 gettingIndex(index){
    console.log(index)
 }

 renderQuestions(){
    return(
        <div>

            <h1> this is testing</h1>
        
        </div>
    );

}
render() {
    const {quizzes } = this.props;
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
