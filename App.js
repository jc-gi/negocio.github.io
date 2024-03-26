
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inicio from './components/inicio'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
		        <div id="colorlib-main">
			        <Inicio></Inicio>			
          	</div>
      	</div>
      </div>
    );
  }
}


export default App;