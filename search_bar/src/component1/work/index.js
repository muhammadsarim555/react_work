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
        
    })
    this.setState({
        result
    })
    console.log(result)
}

renderBody(){
    const { list , result } = this.state;
    const items = result.length ? result : list;
    return(
        
        <ol>
            {
                items.map( function(item , index) {
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
            <input type="text" className="input" onChange={ this.search.bind(this)} placeholder="Search "  />
            {this.renderBody()}
        </div>
      );
    }
  }

export default App;
