import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';
import { Link, Text } from '@nextui-org/react'

function Title() {
  return (
    <div className='Title'>
      <header>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Let's rent
      </Text>
      <Text 
      h3
      size={30}
      css={{
        textGradient: "60deg, $red600 -20%, $black600 50%",
      }}
      >
      You can dream, choose one
      </Text>
        
      <div className='group-of-navigation'>
      <Link
  className="nav-link"
  exact = "true"
  href="/">Main</Link>

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