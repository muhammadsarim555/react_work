import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      userInput: "",
      list: [],
      // edit : "",

    }
    // console.log(this.state.ls)
  }


  changeUserInput(input) {

    this.setState({
      userInput: input.target.value,

    }
      // , ( ) => console.log(input)
  )
  console.log(this.state.userInput);
    
  }
  
  addToList(p) {

    var listArray = this.state.list;
    if (p == "") {
      // input == "" ?
      alert("Please Write Something")
    }
    // : 
    else {
      listArray.push(p)
      this.setState({
        list: listArray,
        userInput: "",
        edit: "",
      }, () => console.log(this.state.list))
    }
  }

  renderEdit(val, index) {
    var updateValue = prompt("Write For Update", "");
    let c = this.state.list;
    console.log(index);
    c[index] = updateValue
    this.setState({
      list: c
    })

  }

  deleteItem(val, index) {
    console.log(val)
    let c = this.state.list;
    console.log(c)
    let newList = c.slice(0, index).concat(c.slice(index + 1))
    console.log(newList)
    this.setState({
      list: newList
    })

  }

  renderHeader() {
    return (<div className="App">
      <h4 className="h4"> To Do List With React</h4>
      <div className="form-group">

        <input type="text" onChange={  this.changeUserInput.bind(this)} value={this.state.userInput} className="form-control" id="title" placeholder="Title"  />
        <button addbtn type="button" onClick={() => this.addToList(this.state.userInput)} className="btn btn-elegant  addbtn ">Add </button>

      </div>

    </div>);
  }

  getValue() {
    return (

      <ul className="list-group" style={{ textAlign: 'center' }}>

        {
          this.state.list.map((val, index) =>
            <li className="list-group-item " key={index}>
              {val}<button type="button" className="btn btn-danger float-right addbtn" onClick={this.deleteItem.bind(this, val, index)} ><i className="fa fa-trash" aria-hidden="true"></i></button>
              <button type="button" className="btn btn-danger float-right addbtn" onClick={this.renderEdit.bind(this, val, index)}  ><i className="fa fa-edit" aria-hidden="true"></i></button>
              {/* {console.log(index)} */}
            </li>
          )}
      </ul>
    )
  }

  render() {
    return (
      // console.log(this),
      <div className="content" >
        {this.renderHeader()}
        {this.getValue()}

      </div>
    );
  }
}

export default App;
// allBooking.slice(0, indexNum).concat(allBooking.slice(indexNum + 1))
