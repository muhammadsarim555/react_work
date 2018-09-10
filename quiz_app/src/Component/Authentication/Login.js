import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            
            }
            // this.updateBoolean = this.updateBoolean.bind(this , true);
            }

    checkEmail(e){
        const {email} = this.state;
        const targetValue = e.target.value;
        this.setState({
            email: targetValue,
        })
        // console.log(email);
    }

    checkPassword(e){
        const {email , password} = this.state;
        const targetValue = e.target.value;
        this.setState({
            password: targetValue,
        })
        // console.log(email);
    }

    // updateBoolean(e){
    //     this.setState({
    //         boolean : e,
    //     })
        
    // }
    
    getEmail() {
        const getEmail = localStorage.getItem('email');
        const {email , password ,boolean} = this.state;
        const getPassword = localStorage.getItem('password');
        this.props.updateEmail(email);
        this.props.updatePassword(password);
        // this.props.updateBoolean(true)
        if(email === getEmail && password === getPassword ) {
            alert("success")
            // this.setState({
            //     boolean : true,
            // })
            this.props.boolean( true);
            // this.props.updateBoolean()
        }
        else{console.log("error for this")}  
        

        console.log('Email', getEmail , 'Password' , getPassword );
    }
    body() {
        return (
            <div>
                <input type="email" value={this.state.email} placholder="email" onChange={this.checkEmail.bind(this)}  />
                <input type="password" value={this.state.password} placholder="password" onChange={this.checkPassword.bind(this)} />
                <button onClick={this.getEmail.bind(this)}> Login</button>
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
