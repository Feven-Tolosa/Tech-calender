// components/Footer.js
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-section'>
            <h3>TechEvents</h3>
            <p>
              Your source for the latest technology conferences and workshops.
            </p>
          </div>
          <div className='footer-section'>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/admin'>Admin Panel</a>
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <h4>Contact Us</h4>
            <p>info@techevents.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>
            &copy; {new Date().getFullYear()} TechEvents. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
