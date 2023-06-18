import React, { useState, useEffect } from 'react';
import logo from '../../../assets/logoTrans.png';
import './style.css';

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? 'nav-active' : 'nav'}>
      <a href="/landingPage" className="logos">
        <img src={logo} alt="logo" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="menu-icon"></span>
      </label>
      <ul className="menu-bar">
  

        <li >
          <a className='cv-btns' href="/userLogin">Login</a>
        </li>
        <li >
          <a className='cv-btns' href="userSignup">Signup</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
