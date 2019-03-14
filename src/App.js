import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Orders from './components/Orders'
import SignUp from './components/SignUp'

class App extends Component {
  state= {
    isSignUpClicked: false,
  }

  onClickSignUp = () => {
    this.setState({
      isSignUpClicked: true,
      showDetails: true
    })
    console.log('clicked')
  } 
  render() {
    const {isSignUpClicked} = this.state;
    console.log(isSignUpClicked)
    return (
      <div className="App">
      <Header onClickSignUp={this.onClickSignUp}/>
      {!isSignUpClicked ? (
      <Orders/> ) : (<SignUp/>)}
      </div>
    );
  }
}

export default App;
