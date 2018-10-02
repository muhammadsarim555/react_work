import React, { Component } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Link, NavLink } from 'react-router-dom';
import App from './App';
import Home from './Screens/Home/Home';
import About from './Screens/About/About'; 

const CustomRouter = () => (
    <Router>
        <div>
            {/* <Links /> */}
            <Link to="/" >Home </Link>
            <Link to="/about">About </Link>
            <hr/>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
        </div>
    </Router>

)

export default CustomRouter;