import React, { Component } from 'react';
import './../../App.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            updateEmail : "",
            updatePassword : "",

        }
    }
    renderBody(){
        
        // console.log(e.target.value)
        return(
            <div>
                <h1> Sign Up Form </h1>
            <input type="email" placeholder="Email" value={this.state.updateEmail} onChange={(e) => this.setState({updateEmail: e.target.value}) } />
                {/* <input type="password" placeholder="Password" value={this.state.updatePassword} onChange={ this.gettingEmail.bind(this)} /> */}
                <button onClick={this.SubmitData.bind(this )}>Submit </button>
                </div>


        )
    }

    gettingEmail(e){
        const { updateEmail  } = this.state;
        const { getEmailPassword } = this.props;
        // let pureValue = e.target.value;
        this.setState(
            {
            updateEmail,
            }
    )

    }

    


    SubmitData(){
        // const {getEmailPassword} = this.props;
        const {updateEmail} = this.state;
        this.props.getEmailPassword(updateEmail);
        localStorage.setItem("email" , updateEmail);
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
