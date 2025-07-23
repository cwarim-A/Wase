import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
