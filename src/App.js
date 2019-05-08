import React, { Component } from 'react';
import NavBar from './component/NavBar'
import './App.css';
import Footers from './component/Footers'
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
     
      <div className="App">
        <BrowserRouter>
            <NavBar/>     
        </BrowserRouter>
     <Footers/>
       </div>
    );
  }
}

export default App;
