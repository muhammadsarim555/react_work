import React, { Component } from 'react';
import './../../App.css';

class Break extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //        condition : "",
    //     }
    // }

   renderState(p){
        this.props.updateState(p);
    }



    render() {
        return (
            <div className="app">
                <button type="button" class="btn btn-success" onClick={this.renderState.bind(this , "break")}>Break Bulb </button>
                {/* <button onClick={this.renderState.bind(this , "on")}>On Bulb </button>
                <button onClick={this.renderState.bind(this , "")}>Off Bulb </button> */}
                
                </div>
        );
    }
}

export default Break;
