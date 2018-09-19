import React, { Component } from 'react';
import './App.css';
import QuizList from './Component/QuizList/QuizList';
import QuizInfo from './Component/QuizInfo/QuizInfo';
import SignUp from './Screens/Authentication/SignUp.jsx';
import Login from './Screens/Authentication/Login.jsx';
import Test from './Screens/Authentication/Test.jsx';
import LogOut from './Screens/Authentication/LogOut.jsx';



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
    }
    this.buttonIndex = this.buttonIndex.bind(this);
    this.signUpName = this.signUpName.bind(this);
    this.signUpEmail = this.signUpEmail.bind(this);
    this.signUpPassword = this.signUpPassword.bind(this);
    this.submitData = this.submitData.bind(this);
    this.loginEmail = this.loginEmail.bind(this);
    this.loginPassword = this.loginPassword.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.logOut = this.logOut.bind(this);
  }

 buttonIndex(index){
   const {quizzes } = this.state;
  console.log(this.state.quizzes)
  this.setState({quizInfo: quizzes[index] , boolean : true})
  console.log(this.state.quizInfo , "qiox info" );
 }

back(){
  this.setState({
    boolean: false,
  })
}

// authentication work

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
  // const boolean = {this.state};
    // console.log(this.state.quizzes)
    const { currentUser } = this.state;

    return (
      <div className="App">

{currentUser && <LogOut state={this.state} logOut={this.logOut} />}

Sign Up Form
{!currentUser && <SignUp signUpName={this.signUpName} signUpEmail={this.signUpEmail}
signUpPassword={this.signUpPassword} submitData={this.submitData} state={this.state} />}

<br/>
      Login Form
{!currentUser && <Login loginEmail={this.loginEmail} loginPassword={this.loginPassword}
   loginButton={this.loginButton} state={this.state} />
 }
        {/* {currentUser && <Test />} */}
        {currentUser && !this.state.boolean && <QuizList quizzes={this.state.quizzes} quizInfo={this.state.quizInfo} buttonIndex={this.buttonIndex}  />}
        {currentUser && this.state.boolean && <QuizInfo quizInfo={this.state.quizInfo}  backButton={this.back.bind(this)}  />}
        
        </div>
    );
  }
}

export default App;
