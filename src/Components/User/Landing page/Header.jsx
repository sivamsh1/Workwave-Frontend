import React from 'react'
import Navbar from './Navbar'
import './style.css'

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name' >
            <h1> <span> Simplify work and get more done  </span> With Workwave </h1>
            <p className='details'>Plan, track, and manage any type of work with project management that flexes to your team's needs.</p>
            <a href="/userSignup" className='cv-btn'> Get Start </a>
        </div>
      
    </div>
  )
}

export default Header
