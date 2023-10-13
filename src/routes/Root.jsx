import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';

export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <Home/> } />
        </Routes>
    </BrowserRouter>
  )
}
