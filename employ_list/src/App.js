import React, { Component } from 'react';
import './App.css';
import swal from "sweetalert";




class App extends Component {
  constructor(){
    super();
    this.state = {
      email : "",
      password  : "",
      currentUser  : null,

      employ_list:[{
        firstName:'Shariq',
        lastName:'Ahmed',
        objEmail:'shariq@gmail.com',
        date:'24/8/15',
        salary:'25000'
      },
      {
        firstName:'Muhammad',
        lastName:'Ali',
        objEmail:'ali@gmail.com',
        date:'14/3/18',
        salary:'30000'
      },
      {
        firstName:'Abdul',
        lastName:'Rafay',
        objEmail:'rafay@gmail.com',
        date:'4/5/17',
        salary:'20000'
      }
    ],
      


      firstName : "",
      lastName : "",
      objEmail : "",
      salary : "",
      date : "",
      
    }
  }

  renderLoginEmail(v){
   this.setState({
     email : v,
     currentUser : false,
     
   } )
  //  console.log(this.state.email)
  

}

  renderLoginPassword(v){
    this.setState({
      password : v,
      currentUser : false,
    })
    
  }

  renderAuth(){
      const { email , password } = this.state;
      if(email == "admin" && password == "admin") {  
        // this.setState({currentUser : true,}) , console.log(this.state.currentUser)
        swal("Good job!", "You clicked the button!", "success")
        this.setState({
          currentUser : true,
          email : "",
          password : "",
          
        })
      // console.log(this.state.currentUser)
        
        }
    else {  
    swal("Error!", "Your Email Might Wrong!", "error")
      this.setState({
        email : "",
        password : "",
        currentUser : false
      })
      // console.log(this.state.currentUser)
    }
  }

  renderLogin(){
    return( <div className="login">
    <div className="login-triangle"></div> 
    
    <h2 className="login-header">Log in</h2>
      <p><input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.renderLoginEmail(e.target.value)} required /></p>
      <p><input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.renderLoginPassword(e.target.value)} required /></p>
      <p><input type="submit" value="Log in" onClick={this.renderAuth.bind(this)} /></p>
  </div>
  );
  console.log(this.state.currentUser)
  }

logOut(){
    this.setState({
      currentUser : null,
    })
    console.log(this.state.currentUser)
  }
  
  renderForm(){
    
    return(
      <div>
        <input placeholder="f-name" />
        <input placeholder="l-name" />
        <input placeholder="email" />
        <input placeholder="salary" />
        <input placeholder="date" />

      <button type="button" className="btn btn-danger add" >Add</button>

      </div>
    );
  }

  renderObject(){
    const {employ_list , currentUser} = this.state;
    const result = currentUser === true;
    return(
    <tbody> 
    {employ_list.map((v,i)=>{
       return  <tr>
              <td  >{i+1}</td>
              <td>{v.firstName}</td>
              <td>{v.lastName}</td>
              <td>{v.objEmail}</td>
              <td>{v.salary}</td>
              <td>{v.date}</td>
              
                  <td><button  className="btn btn-outline-info"  data-toggle="modal" data-target="#updateDataModal"><i className="fa fa-pencil-square-o"></i></button></td>
                  <td><button  className="btn btn-outline-danger"><i className="fa fa-trash-o"></i></button></td>
              
            </tr>
  
    })
    }
  </tbody>
    )
}

  renderApp(){
    return(
      <div>
    <button className="btn btn-default" onClick={this.logOut.bind(this)} >Logout </button>
    {/* <div className="table-responsive"> */}
    <table className="table table-striped table-dark text-center table-responsive">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Salary</th>
          <th scope="col">Job Start Date</th>
          
          <td>Edit</td>
          <td>Delete</td>
            
          
        </tr>
      </thead>
      {/* <tbody> */}
        {
          this.renderObject()
        }
      {/* </tbody> */}
    </table>
  </div>
  // </div>
  );
  }

  render() {
    const {currentUser } = this.state;
    const result = currentUser == true;
    return (
      <div className="App">

      {!currentUser && this.renderLogin()}    
      {result && this.renderForm() }
      {result && this.renderApp()}

      
      

    
      
      
      </div>
    );
  }
}

export default App;
