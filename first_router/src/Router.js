import React, { Component } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Link, NavLink } from 'react-router-dom';
import App from './App';
import Home from './Screens/Home/Home';
import About from './Screens/About/About';
import Navbar from './Screens/Navbar/Navbar'; 
import createBrowserHistory from 'history/createBrowserHistory';

const c = createBrowserHistory();
console.log(c);

const CustomRouter = () => (
    <Router history={c}>
        <div>
            {/* <Links /> */}
            <Navbar />
            <hr/>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
        </div>
    </Router>

)

export default CustomRouter;