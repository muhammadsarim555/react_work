import React, { Component } from 'react';
import './../../App.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            updateEmail : '',
            updatePassword : '',
            }
    }
    renderBody(){
        
        // console.log(e.target.value)
        return(
            <div>
                <h1> Sign Up Form </h1>
            <input type="email" placeholder="Email" value={this.state.updateEmail} onChange={ this.gettingEmail.bind(this )} />
                <input type="password" placeholder="Password" value={this.state.updatePassword} onChange={ this.gettingPassword.bind(this)} />
                <button onClick={this.SubmitData.bind(this )}>Submit </button>
                </div>


        )
    }

    gettingEmail(e){
        const { updateEmail } = this.state;
        let pureValue = e.target.value;
        this.setState(
            {
            updateEmail: pureValue,
            }

        )
    }

    gettingPassword(e){
        const { updatePassword } = this.state;
        let pureValue = e.target.value;
        this.setState(
            {
            updatePassword: pureValue,
            }
    )
}

updateBoolean(e){
    console.log(e);
}

    SubmitData(){
        // const {getEmailPassword} = this.props;
        const {updateEmail , updatePassword} = this.state;
        
        this.props.getEmail(updateEmail);
        this.props.getPassword(updatePassword);
        localStorage.setItem("email" , updateEmail);
        localStorage.setItem("password" , updatePassword);
        this.props.getBoolean(this.updateBoolean.bind(this))

        this.setState({
            updateEmail: '',
            updatePassword: '',
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
