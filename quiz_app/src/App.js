import React, { Component } from 'react';
import './App.css';
import QuizList from './Component/QuizList/QuizList';
import QuizInfo from './Component/QuizInfo/QuizInfo';
import SignUp from './Component/Authentication/SignUp.jsx';
import Login from './Component/Authentication/Login.jsx';
import Test from './Component/Authentication/Test.jsx';
import LogOut from './Component/Authentication/LogOut.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes : [
        {name: "HTML" , questions : 10, },
        {name: "CSS" , questions : 10, },
        {name: "JavaScript" , questions : 10, },
        {name: "React" , questions : 10, },
      ],
      quizInfo : null,
      boolean: false,
      name: '',
      email: '',
      password: '',
      loginEmail: '',
      loginPassword: '',
      currentUser: false,
    };
    this.buttonIndex = this.buttonIndex.bind(this)
    this.signUpName = this.signUpName.bind(this);
    this.signUpEmail = this.signUpEmail.bind(this);
    this.signUpPassword = this.signUpPassword.bind(this);
    this.submitData = this.submitData.bind(this);
    this.loginEmail = this.loginEmail.bind(this);
    this.loginPassword = this.loginPassword.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  buttonIndex(index) {
    const { quizzes } = this.state;
    console.log(this.state.quizzes)
    this.setState({ quizInfo: quizzes[index], boolean: true })
    console.log(this.state.quizInfo, "qiox info");
  }

  back() {
    this.setState({
      boolean: false,
    })
  }

  // for signup component
  updateEmail(u) {

    this.setState({
         signUpEmail : u,
      }
    )
    console.log(u)
  }

// for signup component pasword
updatePassword(u) {

  this.setState({
       signUpPassword : u,
    }
  )
}

  
  // signup component working update state via parameter

  signUpName(e) {
    this.setState({
      name: e.target.value,
    })
  }

  signUpEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  signUpPassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  submitData() {
    const { name, email, password } = this.state;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // console.log(this.state.email);
    // console.log(this.state.password);
    this.setState({
      email: '',
      password: '',
      name: '',
    })
  }

  // login work for users

  loginEmail(e) {
    this.setState({
      loginEmail: e.target.value,
    })
  }

  loginPassword(e) {
    this.setState({
      loginPassword: e.target.value,
    })
  }

  loginButton() {
    const { loginEmail, loginPassword } = this.state;
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    loginEmail === email
      &&
      loginPassword === password
      ?
      (this.setState({
        currentUser: true,
      }),
        alert("succeess"))
      :
      (console.log("error"));
    this.setState({
      loginEmail: '',
      loginPassword: '',
    })
    // console.log(this.state.loginEmail);


    // console.log(email);
    // console.log(password);
  }

  // logout button

  logOut() {
    this.setState({
      currentUser: false,
    })
  }

  render() {
    const { currentUser } = this.state;

    // console.log(this.state.signUpEmail)

    return (
      <div className="App">
        {this.renderHeader()}
          {/* <SignUp getEmail={this.updateEmail.bind(this)} getPassword={this.updatePassword.bind(this)} getBoolean={this.updateBoolean.bind(this)} />
        <Login updateEmail={this.updateEmail.bind(this)} updatePassword={this.updatePassword.bind(this)} boolean={this.state.signupBoolean} loginBoolean={this.state.loginBoolean}  />   */}
         <QuizList quizzes={this.state.quizzes} buttonIndex={this.buttonIndex}  />
         <QuizInfo quizInfo={this.state.quizInfo}  backButton={this.back.bind(this)}  />
        
      </div>
    );
  }
}

export default App;
