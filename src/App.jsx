import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'

function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
      
       
      </Routes>
    </>
  )
}

export default App
