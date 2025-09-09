// components/Navbar.js (updated with fixed positioning)
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar fixed'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo'>
          TechEvents
        </Link>
        <ul className='navbar-menu'>
          <li className='navbar-item'>
            <Link to='/' className='navbar-link'>
              Home
            </Link>
          </li>

          <li className='navbar-item'>
            <Link to='/about' className='navbar-link'>
              About
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/signin' className='navbar-link'>
              Admin Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
// components/Navbar.js (updated with fixed positioning)
