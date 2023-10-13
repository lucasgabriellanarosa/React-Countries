import React from 'react'
import { useRef } from 'react'
import './navbar.css'

export const Navbar = ({query, setQuery}) => {

  const inputQuery = useRef("") 

  const updateQuery = () => {
    setQuery(inputQuery.current.value)
  }

  return (
    <input type="text" 
    ref={inputQuery}
    onChange={updateQuery}
    value={query}
    className='navbarInput'
    />
  )
}
