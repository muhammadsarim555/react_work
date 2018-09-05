import React, { Component } from 'react';
class On extends Component {
  

   renderState(p){
        this.props.updateState(p);
    }



    render() {
        return (
            <div className="app">
                <button onClick={this.renderState.bind(this , "on")}>On Bulb </button>
                
                </div>
        );
    }
}

export default On;
