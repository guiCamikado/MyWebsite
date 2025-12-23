import { useState } from 'react'
import './App.css'
import Home from './components/pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SolutionForManyCardsInOneTab from './components/temp/SolutionForManyCardsInOneTab'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/testing' element={<SolutionForManyCardsInOneTab/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
