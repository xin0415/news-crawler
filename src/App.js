import 'materialize-css/dit/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <img className='logo' src={logo} alt='logo'/>
        <div className='container'>
        </div>
      </div>
    );
  }
}

export default App;