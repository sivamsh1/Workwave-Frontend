import React from 'react'
import About from './About'
import Feature from './Feature'
import Header from './Header'
import './style.css'
import aboutImage from './images/Frame 19.png'
import aboutImage1 from './images/download.png'
import Contact from './Contact'




function LandingPage() {

  return (
    <div className='App' >
    <Header/>
    <Feature/>
    <About image = { aboutImage}  title = ' Simplify work & get more done. ' button =' Signup '  />
    <Contact/>
     
     
    </div>
  )
}

export default LandingPage
