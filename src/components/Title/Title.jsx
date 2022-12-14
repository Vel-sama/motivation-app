import  { React, useState } from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';
import { Text, Input } from '@nextui-org/react'


function Title() {
  const [ query, setQuery ] = useState('')
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
        textGradient: "60deg, $red600 -20%, $yellow600 50%",
        
      }}
      >
      You can dream, choose one
      </Text>
        
      <div className='group-of-navigation'>
        <NavLink
          className="nav-link"
          exact = "true"
          to="/">Main
        </NavLink>

        <NavLink
          className="nav-link"
          to="/about">About
        </NavLink>
        <RandomSpace />
      </div>
      <form>
      <Input placeholder="Next UI"
      underlined   
          size='xs'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
      </form>
      </header>
    </div>
  )
}

export default Title