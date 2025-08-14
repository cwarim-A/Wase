import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile'
import SearchPage from './pages/SearchPage'

function App() {
  

  return (
    <>
     {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
