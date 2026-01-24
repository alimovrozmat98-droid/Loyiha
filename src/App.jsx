import { useState } from 'react'
import './App.css'
import Header from './companents/Header/Header'
import Navbar from './companents/Navbar/Navbar'
import Hero from './companents/Hero/Hero'
import Blog from './companents/Blog/Blog'
import About from './companents/About/About'
import Card from './companents/Card/Card'
import Profile from './companents/Profile/Profile'
import Footer from './companents/Footer/Footer'


function App() {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Hero />
        <Blog />
        <About />
        <Card  />
        <Profile />
        <Footer />
      </div>
    </>
  )
}

export default App
