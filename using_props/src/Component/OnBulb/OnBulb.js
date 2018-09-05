import React, { Component } from 'react';
import './../../App.css';

class On extends Component {
  

   renderState(p){
        this.props.updateState(p);
    }



    render() {
        return (
            <div className="app">
                <button class="btn btn-success" onClick={this.renderState.bind(this , "on")}>On Bulb </button>
                
                </div>
        );
    }
}

export default On;
