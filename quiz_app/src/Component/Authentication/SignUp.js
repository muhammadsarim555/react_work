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
        const { update } = this.state;
        const { getEmailPassword } = this.props;
        let pureValue = e.target.value;
        this.setState(
            {
            update: pureValue,
            }
    )

    }

    


    SubmitData(){
        // const {getEmailPassword} = this.props;
        const {update} = this.state;
        this.props.getEmailPassword(update);
        this.setState({
            update: '',
        })
        
    }

   
    



    render() {
        return (
            <div className="app">
            
            {this.renderBody()}
            {/* <button value={this.state.update} onClick={this.SubmitData.bind(this)} > </button> */}
            
            </div>
        );
    }
}
export default SignUp;
