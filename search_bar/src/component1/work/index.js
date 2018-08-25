import React, { Component } from 'react';
import logo from '../.././logo.svg';
import '../.././App.css';

class App extends Component {
    
constructor(){
    super();
    this.state = {
        list: ["sarim" , "rohail " , "masood" , "shahid" , "imran" , "basit" , "shahrukh"],
    }
}

search(p){
    const { list } = this.state;
    const text = p.target.value;

   const result = list.filter(function(item) {
        return item == text
        
    })
    console.log(result)
}

renderBody(){
    const { list } = this.state;

    return(
        
        <ol>
            {
                list.map( function(item , index) {
                return <li key={index}> {item} </li>
            })
        
        
        }
        </ol>

        // <input type=""text />
    );
}
    render() {
      return (
        <div className="App">
            <input type="text" className="input" onChange={() => this.search()} placeholder="Search "  />
            {this.renderBody()}
        </div>
      );
    }
  }

export default App;
