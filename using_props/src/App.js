import React, { Component } from 'react';
import off from "./images/off.jpg";
import on from "./images/on.jpg";
import brokenImage from "./images/broken.jpg";
import './App.css';
import Break from "./Component/BrokenBulb/Broken"
import OffBulb from "./Component/OffBulb/OffBulb.js"
import On from "./Component/OnBulb/OnBulb.js"

class App extends Component {
    constructor() {
        super();
        this.state = {
           condition : "",
        }
    }

    header(){

    }

    body(){
        const {condition} = this.state;
        return(
            <div>

          {condition === ""  &&  <img src={off} alt="Default image" width="150px" height="150px" />}
        
            
            {condition === "on" && <img src={on} alt="Default image" width="150px" height="150px" />}
            {condition === "break" && <img src={brokenImage} alt="Default image" width="150px" height="150px" />}
            </div>
        )

    }

    updateState(p){
        this.setState({
            condition : p,
        })
    }



    render() {
        return (
            <div className="app">
                {this.body()}
                <Break updateState={this.updateState.bind(this)} />
                <OffBulb updateState={this.updateState.bind(this)}  />
                <On updateState={this.updateState.bind(this)}  />
                </div>
        );
    }
}

export default App;
