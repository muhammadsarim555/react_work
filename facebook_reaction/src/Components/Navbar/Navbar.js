import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import '../../App.css';

class Navbar extends Component {
  
  render() {
    return (
      <div className="App">
          <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      
      </div>
    );
  }
}

export default Navbar;
