import React, { Component } from 'react';
import off from "./images/off.jpg";
import on from "./images/on.jpg";
import brokenImage from "./images/broken.jpg";
import './App.css';
import Break from "./Component/BrokenBulb/Broken";
import OffBulb from "./Component/OffBulb/OffBulb.js";
import On from "./Component/OnBulb/OnBulb.js";

class App extends Component {
    constructor() {
        super();
        this.state = {
            condition: "",
        }
    }

    header() {
        return (
            <div>
                <nav className="navbar navbar-dark primary-color">
                    <a className="navbar-brand" href="https://github.com/muhammadsarim555" target="_blank">Muhammad Sarim</a>
                    {/* <button c1lassName="btn btn-default btn-logout" onClick={this.logOut.bind(this)} >Logout </button> */}
                </nav>
            </div>
        )
    }

    body() {
        const { condition } = this.state;
        return (
            <div>
                {condition === "" && <img src={off} alt="Default image" width="150px" height="200px" />}
                {condition === "on" && <img src={on} alt="Default image" width="150px" height="200px" />}
                {condition === "break" && <img src={brokenImage} alt="Default image" width="150px" height="200px" />}
            </div>
        )

    }

    updateState(p) {
        this.setState({
            condition: p,
        })
    }



    render() {
        return (
            <div className="app">
                {this.header()}
                <br />
                {this.body()}
                <Break updateState={this.updateState.bind(this)} />
                <OffBulb updateState={this.updateState.bind(this)} />
                <On updateState={this.updateState.bind(this)} />
            </div>
        );
    }
}

export default App;
