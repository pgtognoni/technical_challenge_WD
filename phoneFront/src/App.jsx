import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Phones from './components/Phones'
import OnePhone from './components/OnePhone'
import HomePage from './HomePage'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/phones/:id' element={<OnePhone />} />
      </Routes>
    </div>
  )
}

export default App
