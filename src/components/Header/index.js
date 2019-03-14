import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';

class Header extends Component {
  render() {
    const {onClickSignUp} = this.props;
    return (
      <header className="header">
        <div className='container'>
          <img src={logo} alt='header-logo' className='header-logo' />
          <ul className='header-nav'>
            <li className='header-nav__item'>
              <button onClick={() => onClickSignUp()}>Sign up</button>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;