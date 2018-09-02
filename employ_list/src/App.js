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
        this.setState({currentUser : true,}) , console.log(this.state.currentUser)
        swal("Good job!", "You clicked the button!", "success")
        this.setState({
          // currentUser : true,
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
      <div className="form-content">
        <nav className="navbar navbar-dark primary-color">
    <a className="navbar-brand" href="https://github.com/muhammadsarim555" target="_blank">Muhammad Sarim</a>
    <button className="btn btn-default btn-logout" onClick={this.logOut.bind(this)} >Logout </button>
</nav>

        {/* <input placeholder="f-name" /> */}
        <input type="text" placeholder="first name" id="firstName" value={this.state.firstName} onChange={(e) => this.setState({firstName : e.target.value})} class="form-control"/>
        <input placeholder="last name" id="lastName" class="form-control" value={this.state.lastName} onChange={(e) => this.setState({lastName : e.target.value})}  />
        <br/>
        <input placeholder="email" id="email" className="form-control" value={this.state.objEmail} onChange={(e) => this.setState({objEmail : e.target.value})}e/>
        <input placeholder="salary" id="salary" className="form-control" value={this.state.salary} onChange={(e) => this.setState({salary : e.target.value})} />
        <input placeholder="date" id="date" className="form-control" value={this.state.date} onChange={(e) => this.setState({date : e.target.value})} />

        <br/><br/><br/>
      <button type="button" className="btn btn-danger add " onClick={this.addForm.bind(this)}>Add</button>
      <hr/>
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

addForm(){
  const  {employ_list , firstName , lastName , objEmail , salary , date } = this.state;
  employ_list.push({
    firstName,
    lastName ,
  })
  console.log(firstName)
  this.setState({
    firstName : "",
    lastName : "",
  })
}

renderApp(){
    return(
      <div>
    {/* <div className="table-responsive"> */}
    <table className="table table-striped table-info text-center ">
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
