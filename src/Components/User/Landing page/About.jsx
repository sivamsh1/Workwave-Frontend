import React from 'react'
import './style.css'



function About(props) {
  return (
    <div id='about' >
        <div className='about-image' >
         <img src={props.image} alt="" />
        </div>
        <div className='about-text'>
  <h1>{props.title}</h1>
  <p className='details' >Work with your team in real-time with Chat, assign comments for action items, and never miss a beat with notifications that bring everything in one place. </p>
  <button>{props.button}</button>
        </div>
      
    </div>
  )
}

export default About
