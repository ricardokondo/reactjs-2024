import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Portifolio from './Pages/Portifolio'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About/>
      <Service />
      <Portifolio />
      <Contact />
      <Footer />
    </>
        
  )
}

export default App
