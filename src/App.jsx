import React, { useState } from 'react'
import Card from './Components/Card'
import Nav from './Components/Nav'
import { Route, Router, Routes } from 'react-router-dom';
import Favourite from './Components/Favourite';
import Home from './Components/Home';

const App = () => {
 
  return (
   
  <Routes>
 <Route path='/' element={<Home/>}/>
  <Route path='/favourite' element={<Favourite/>}/>
    </Routes>
  )
}

export default App