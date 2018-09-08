import React, { Component } from 'react';
import './../../App.css';

class SignUp extends Component {
 constructor(){
     super();

     this.renderBody = this.renderBody.bind(this);
 }
    renderBody(){
        const signUp = "Sign Up Form";
        // console.log(this.props.updateEmailPassword , "chekgin??? ")
        // {}

        return(
            <div>
                <h1> {signUp} </h1>
                <input type="email" placeholder="Email" onChange={(e) => this.gettingEmail(e.target.value)} />
                {/* <input type="password" placeholder="Password" onChange={(e) => this.gettingInput(e.target.value)} /> */}
                <button onClick={this.SubmitData.bind(this )}>Submit </button>
                </div>


        )
    }

    gettingEmail(e){
         this.props.updateEmailPassword(e)

        // console.log(e ,"geeitng input from user ");
    }

    SubmitData(e){
        console.log(this.props.updateEmailPassword(e) )
        // const {updateEmailPassword} = this.props;
        // console.log(updateEmailPassword(e) , "123chekign");
        // console.log(this.props.updateEmailPassword , "chekingrigh nwe");

        
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
