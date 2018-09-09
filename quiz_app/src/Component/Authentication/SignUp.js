import React, { Component } from 'react';
import './../../App.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            update : "",
        }
    }
    renderBody(){
        
        // console.log(e.target.value)
        return(
            <div>
                <h1> Sign Up Form </h1>
            <input type="email" placeholder="Email" value={this.state.update} onChange={ this.gettingEmail.bind(this )} />
                {/* <input type="password" placeholder="Password" onChange={ this.gettingEmail.bind(this)} /> */}
                <button onClick={this.SubmitData.bind(this )}>Submit </button>
                </div>


        )
    }

    gettingEmail(e){
        this.setState({
            update : e.target.value,
        })
        const {update } = this.state;

        const {updateEmailPassword} = this.props;
        
        // console.log("geeting email" , updateEmailPassword(update))
    }

    SubmitData(e){
        const {updateEmailPassword} = this.props;
        updateEmailPassword(this.state.update);
        console.log(updateEmailPassword(e) )
        // console.log(updateEmailPassword(e) , "123chekign");
        // console.log(this.props.updateEmailPassword , "chekingrigh nwe");

        
    }

   
    



    render() {
        return (
            <div className="app">
            
            {this.renderBody()}
            <button value={this.state.update} onClick={this.SubmitData.bind(this)} > </button>
            </div>
        );
    }
}
export default SignUp;
