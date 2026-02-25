import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import HomePart2 from './components/HomePart2'
import ImageCard from './components/ImageCard'
import Hero from './components/Hero'
import Review from './components/Review'
import TreatmentCard from './components/TreatmentCard'
import Footer from './components/Footer'
import Disclaimer from './components/Disclaimer'
import Privacy from './components/Privacy'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import DisNav from './components/DisNav'


const App = () => {
  return (
    <div>

      <BrowserRouter basename='/clinic'>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path='Terms-and-condition' element={<Disclaimer />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
