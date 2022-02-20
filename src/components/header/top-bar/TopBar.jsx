import React from 'react';
import './TopBar.css'

const TopBar = () => {
  return (
    <div className="header__top">
      <div className="container">
        <ul className='contact-list'>
          <li className='contact-item'><span className='phone'></span>+375 29 100 20 30</li>
          <li className='contact-item'><span className='location'></span>Belarus, Gomel, Lange 17</li>
          <li className='contact-item'><span className='clock'></span>All week 24/7</li>
        </ul>
        <ul className='social-list'>
          <li className='social-item'>
            <a href="#" className='social-link facebook'></a>
          </li>
          <li className='social-item'>
            <a href="#" className='social-link twitter'></a>
          </li>
          <li className='social-item'>
            <a href="#" className='social-link instagram'></a>
          </li>
          <li className='social-item'>
            <a href="#" className='social-link pinterest'></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TopBar;