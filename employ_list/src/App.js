import React, { Component } from 'react';
import './App.css';
import swal from "sweetalert";




class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      currentUser: false,
      currentIndex: null,

      employ_list: [{
        firstName: 'Muhammad',
        lastName: 'Sarim',
        objEmail: 'muhammadsarim555@gmail.com',
        date: '2016-04-29',
        salary: '250000'
      },

      ],



      firstName: "",
      lastName: "",
      objEmail: "",
      salary: "",
      date: "",

    }
  }

  renderLoginEmail(v) {
    this.setState({
      email: v,
      currentUser: false,

    })
    //  console.log(this.state.email)


  }

  renderLoginPassword(v) {
    this.setState({
      password: v,
      currentUser: false,
    })

  }

  renderAuth() {
    const { email, password } = this.state;
    if (email == "admin@domain.com" && password == "admin") {
      this.setState({ currentUser: true, }), console.log(this.state.currentUser)
      swal("Good job!", "You clicked the button!", "success")
      this.setState({
        // currentUser : true,
        email: "",
        password: "",

      })
      // console.log(this.state.currentUser)

    }
    else {
      swal("Error!", "Your Email Might Wrong!", "error")
      this.setState({
        email: "",
        password: "",
        currentUser: false
      })
      // console.log(this.state.currentUser)
    }
  }

  renderLogin() {
    return (<div className="login">
      <div className="login-triangle"></div>

      <h2 className="login-header">Log in</h2>
      <p><input type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.renderLoginEmail(e.target.value)} required /></p>
      <p><input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.renderLoginPassword(e.target.value)} required /></p>
      <p><input type="submit" value="Log in" onClick={this.renderAuth.bind(this)} /></p>
    </div>
    );
    console.log(this.state.currentUser)
  }

  logOut() {
    this.setState({
      currentUser: null,
    })
    console.log(this.state.currentUser)
  }

  renderForm(index) {
    const { currentIndex } = this.state;
    return (
      <div className="form-content">
        <nav className="navbar navbar-dark primary-color">
          <a className="navbar-brand" href="https://github.com/muhammadsarim555" target="_blank">Muhammad Sarim</a>
          <button className="btn btn-default btn-logout" onClick={this.logOut.bind(this)} >Logout </button>
        </nav>

        {/* <input placeholder="f-name" /> */}
        {/* <label htmlFor="firstName" className="">First Name: </label>  */}
        <input type="text" placeholder="first name" id="firstName" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} className="form-control" />
        <input type="text" placeholder="last name" id="lastName" class="form-control" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
        <br />
        <input type="email" placeholder="email" id="email" className="form-control" value={this.state.objEmail} onChange={(e) => this.setState({ objEmail: e.target.value })} e />
        <input type="number" placeholder="salary" id="salary" className="form-control" value={this.state.salary} onChange={(e) => this.setState({ salary: e.target.value })} />
        <input type="date" placeholder="date" id="date" className="form-control" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} />

        <br /><br /><br />
        {currentIndex != null && <p>You are editing item # {currentIndex + 1} </p>}

        {currentIndex == null ? <button type="button" className="btn btn-info add " onClick={this.renderAddForm.bind(this, index)}>Add</button>
          :
          <div>
            <button type="button" className="btn btn-info add " onClick={this.renderUpdateData.bind(this, currentIndex)}>Update</button>
            <button type="button" className="btn btn-info add " onClick={this.renderCancel.bind(this)}>Cancel</button>
          </div>}

        <hr />
      </div>
    );
  }

  renderObject() {
    const { employ_list, currentUser } = this.state;
    const result = currentUser === true;

    return (
      <tbody>

        {employ_list.map((v, i) => {
          return <tr>
            <td  >{i + 1}</td>
            <td> {v.firstName}</td>
            <td>{v.lastName}</td>
            <td>{v.objEmail}</td>
            <td>{v.salary}</td>
            <td>{v.date}</td>

            <td><button className="btn btn-info add" data-toggle="modal" data-target="#updateDataModal" onClick={this.renderEdit.bind(this, i)} >Edit</button></td>
            <td><button className="btn btn-danger" onClick={this.renderDelete.bind(this, i)}>Delete</button></td>

          </tr>

        })
        }
      </tbody>
    )
  }

  renderAddForm() {
    const { employ_list, firstName, lastName, objEmail, salary, date } = this.state;
    employ_list.push({
      firstName,
      lastName,
      objEmail,
      salary,
      date,
    })
    // console.log(firstName)
    this.setState({
      firstName: "",
      lastName: "",
      objEmail: "",
      salary: "",
      date: "",
    })
  }

  renderEdit(index) {
    const { employ_list, currentIndex } = this.state;

      this.setState({
      currentIndex: index,
      firstName: employ_list[index].firstName,
      lastName: employ_list[index].lastName,
      objEmail: employ_list[index].objEmail,
      salary: employ_list[index].salary,
      date: employ_list[index].date,
    });
    console.log(employ_list[index]);

  }

  renderUpdateData(index) {
    const { employ_list, firstName, lastName, objEmail, salary, date , currentIndex } = this.state;
    let updateObject = {
      firstName,
      lastName ,
      objEmail,
      salary ,
      date ,
    }
    employ_list[currentIndex] = updateObject;
    this.setState({
      firstName: "",
      lastName: "",
      objEmail: "",
      salary: "",
      date: "",
      currentIndex: null,
    });
    console.log(currentIndex);
    // console.log( employ_list[index].firstName = lastName , "???");

  }

  renderCancel() {
    const { currentIndex, firstName, lastName, objEmail, salary, date } = this.state;
    this.setState({
      currentIndex: null,
      firstName: "",
      lastName: "",
      objEmail: "",
      salary: "",
      date: "",
    })
  }


  renderDelete(index) {
    const { employ_list } = this.state;
    employ_list.splice(index, 1);

    this.setState({ employ_list, currentIndex: null });
  }


  renderApp() {
    return (
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
    const { currentUser } = this.state;
    const result = currentUser == true;
    return (
      <div className="App">

        {!currentUser && this.renderLogin()}
        {result && this.renderForm()}
        {result && this.renderApp()}







      </div>
    );
  }
}

export default App;
