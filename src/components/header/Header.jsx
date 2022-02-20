import React from 'react';
import TopBar from './top-bar/TopBar';
import NavBar from './nav-bar/NavBar';

const Header = () => {
  return (
    <header className='header'>
      <TopBar />
      <NavBar />
    </header>
  )
}

export default Header;