import React, { Component } from 'react';
class OffBulb extends Component {
    
   renderState(p){
        this.props.updateState(p);
    }



    render() {
        return (
            <div className="app">

                <button onClick={this.renderState.bind(this , "")}>Off Bulb </button>

                
                </div>
        );
    }
}

export default OffBulb;
