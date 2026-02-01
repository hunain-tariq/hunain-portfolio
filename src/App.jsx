import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './landing.jsx'
import { ToastContainer } from 'react-toastify'




const App = () => {

  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
      
    </>
  )
}

export default App
