import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';

function Title() {
  return (
    <div className='Title'>
      <header>
        <h1>GROW</h1>
        <h2>Check result of your grow up everyday</h2>
      <div>
      <NavLink
  className="nav-link"
  exact = "true"
  to="/">Main</NavLink>

<NavLink
  className="nav-link"
  to="/about">About</NavLink>
  <RandomSpace />
      </div>
      </header>
    </div>
  )
}

export default Title