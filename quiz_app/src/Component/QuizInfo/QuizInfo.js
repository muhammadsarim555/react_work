import React, { Component } from 'react';
import './../../App.css';

class QuizInfo extends Component {
 
    

    render() {
        const {quizInfo , backButton} = this.props;
        return (
            <div className="app">
                    <h1>{quizInfo.name} </h1>
                    <button onClick={backButton}>Back Button </button>
                </div>
        );
    }
}
export default QuizInfo;
