import React, { useState } from 'react';
import logo from './../assets/logo.png';
import './../CSS/navbar.css';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        
        <nav>
          <Link to="/market">Market</Link>
          <Link to="/features">Features</Link>
          <Link to="/whitepapers">White Papers</Link>
          <Link to="/about">About Us</Link>
        </nav>

        <a href="" className='btn'>En</a>

        <div className="hamburger" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars}/>
        </div>

        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        
        {/* Sidebar Menu */}
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="close-btn" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faXmark}/>
          </div>

          <Link to="/market" onClick={() => setIsOpen(false)}>Market</Link>
          <Link to="/features" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/whitepapers" onClick={() => setIsOpen(false)}>White Papers</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        </div>
        
      </div>
  )
}

export default Navbar