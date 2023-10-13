import React from 'react'
import './header.css'
import { Navbar } from '../Navbar/Navbar'

export const Header = ({query, setQuery}) => {
  return (
    <header className='header'>
      <Navbar query={query} setQuery={setQuery}/>
    </header>
  )
}
