import React from 'react';
import './header.css';
import logo from '../assets/star-wars-logo.png';

function Header() {
  return (
    <header>
      <img src={ logo } alt="Star Wars logo" />
      <h1>Planets Search</h1>
    </header>
  );
}

export default Header;
