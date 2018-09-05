import React, { Component } from 'react';
import './../../App.css';

class OffBulb extends Component {
    
   renderState(p){
        this.props.updateState(p);
    }



    render() {
        return (
            <div className="app">

                <button class="btn btn-success" onClick={this.renderState.bind(this , "")}>Off Bulb </button>

                
                </div>
        );
    }
}

export default OffBulb;
