import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Orders from './components/Orders'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Orders/>
      </div>
    );
  }
}

export default App;
