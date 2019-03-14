import React, { Component } from 'react';
import './style.css';

class SignUp extends Component{
  state = {
    firstName: '',
    lastName: ''
  }
  onChange = (event) =>{
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }
  onSubmit = () => {
    const {firstName,userName} = this.state;
    console.log(firstName);
    console.log(userName);
  }
  render() {
    return(
      <div className='container signUp__container'> 
        <h1 className='signUp__title'>Registration</h1>
        <form className='signUp__form'>
          <input className='signUp__input' name='firstName' onChange={this.onChange} placeholder='enter your name' />
          <input className='signUp__input' name='userName' onChange={this.onChange} placeholder='enter your surname' />
        </form>
        <button onClick={this.onSubmit} className='submit'>Submit</button>
      </div>
    )
  }
}

export default SignUp;