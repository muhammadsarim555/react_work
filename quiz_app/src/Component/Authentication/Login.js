import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        
        this.checkEmail = this.checkEmail.bind(this);
    }

    checkEmail() {
        const getEmail = localStorage.getItem('email');
        console.log(getEmail);
    }
    body() {
        return (
            <div>
                <input type="email" placholder="email"  />
                <input type="password" placholder="password"  />
                <button onClick={() => this.checkEmail()}> Get Value</button>
            </div>
        )
    }


    // checkPassword() {

    // }




    render() {
        return (
            <div className="app">
                    {this.body()}
                    </div>
        );
    }
}
export default Login;
