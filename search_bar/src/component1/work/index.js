import React, { Component } from 'react';
import logo from '../.././logo.svg';
import '../.././App.css';

class App extends Component {
    
constructor(){
    super();
    this.state = {
        list: ["sarim shahid" , "rohail " , "masood" , "shahid" , "imran" , "basit" , "shahrukh"],
        result: [],
    }
}

search(p){
    const { list } = this.state;
    const text = p.target.value;

    const result = list.filter(function(item) {
    const lowerItem = item.toLowerCase();
    const lowerText =   text.toLowerCase(); 
    return lowerItem.substring(0 , lowerText.length).indexOf(lowerText) != -1 
        // return item.indexOf(text) != -1
    })
    this.setState({
        result , text
    })
    console.log(result)
}

renderBody(){
    const { list , result , text } = this.state;
    const items = text ? result : list;
    return(
        <div>
       {text &&  <h1>You are Searching "{text}" </h1>}
        
        <ol>
            {
                items.map( function(item , index) {
                return <li key={index}> {item} </li>
            })
        
        
        }
        </ol>

        </div>
    );
}
    render() {
      return (
        <div className="App">
            <input type="text" className="input" onChange={ this.search.bind(this)} placeholder="Search "  />
            {this.renderBody()}
        </div>
      );
    }
  }

export default App;
