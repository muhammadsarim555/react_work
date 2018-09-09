import React, { Component } from 'react';
import './../../App.css';

class Break extends Component {
    constructor() {
        super();
        this.state = {
           v: "",
        }
    }

   renderInput(p){
       let khalisValue = p.target.value;
       this.setState({
           v : khalisValue,
       })
       console.log(khalisValue)
        // this.props.change(p.target.value);
    }

    renderSubmit(p){
        let {v} = this.state;
    //    console.log(khalisValue)
        this.props.change(v);
    }



    render() {
        return (
            <div className="app">
                <input type="text" onChange={this.renderInput.bind(this )}/>
                < button onClick={this.renderSubmit.bind(this)} > Submit</button>
                
                </div>
        );
    }
}

export default Break;
