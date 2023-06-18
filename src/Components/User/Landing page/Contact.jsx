import React, { useState } from 'react'
import './style.css'




function Contact() {
  return (
    <div id='contact'  >
 <h3>  Share your experience and thoughs with us....  </h3>

 <div className='contact-input' >
 <input  type="text" placeholder='Drop your experience here ...'  />
         <a href="">Send</a>
 </div>
    </div>
  )
}

export default Contact
