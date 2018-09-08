import React, { Component } from 'react';
import './../../App.css';

class SignUp extends Component {
 constructor(){
     super();

     this.renderBody = this.renderBody.bind(this);
 }
    renderBody(){
        const signUp = "Sign Up Form";
        return(
            <div>
                <h1> {signUp} </h1>
                <input type="email" placeholder="Email" onChange={(e) => this.gettingInput(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => this.gettingInput(e.target.value)} />
                <button onClick={this.SubmitData.bind(this)}>Submit </button>
                </div>


        )
    }

    gettingInput(e){
        this.props.updateEmailPassword()
        // console.log(e ,"geeitng input from user ");
    }

    SubmitData(){
        console.log("Data has been saved");

        
    }

   
    



    render() {
        return (
            <div className="app">
            {this.renderBody()}
            </div>
        );
    }
}
export default SignUp;
