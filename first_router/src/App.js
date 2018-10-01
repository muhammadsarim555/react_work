import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, BrowserRouter, Link, NavLink } from 'react-router-dom';
import Home from './Screens/Home/Home';
import About from './Screens/About/About';    

// const Home = () => (
//     <h1> Home </h1>
// )

// const About = () => (
//     <h1> About </h1>
// )

const Links = () => (
    <ul>
        <li>
            <NavLink exact activeClassName="selected" to="/"> Home
                </NavLink>
        </li>
        <li>
            <NavLink activeClassName="selected" to="/about"> About
            </NavLink>
        </li>
    </ul>
)


const App = () => (
    <BrowserRouter>
        <div>
            <Links />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
    </BrowserRouter>

)

export default App;
