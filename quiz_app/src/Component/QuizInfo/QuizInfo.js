import React, { Component } from 'react';
import './../../App.css';

class QuizInfo extends Component {
 
    renderState(p){
        this.props.updateState(p);
    }



    render() {
        const {quizInfo , backButton} = this.props;
        return (
            <div className="app">
                    <h1> Welcome To {quizInfo.name} <button>+</button> </h1>
                    <h3><b>Quiz Title :</b> HTML5   </h3>
                    <button onClick={backButton}>Back Button </button>
                    <button >Start Now </button>
                </div>
        );
    }
}
export default QuizInfo;
