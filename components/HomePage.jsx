// components/HomePage.js (updated with full-screen hero)
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import EventCard from './EventCard'
import { Link } from 'react-router-dom'

const HomePage = ({ events }) => {
  return (
    <div className='homepage'>
      <Navbar />
      <section className='hero fullscreen'>
        <div className='hero-content'>
          <h1>Tech Events Calendar</h1>
          <p>
            Discover the latest technology conferences, workshops, and meetups
          </p>
          <a href='#events' className='cta-button'>
            Explore Events
          </a>
        </div>
        <div className='scroll-indicator'>
          <span>Scroll down</span>
          <div className='arrow'></div>
        </div>
      </section>
      <section className='events-section' id='events'>
        <div className='container'>
          <h2>Upcoming Tech Events</h2>
          <div className='events-grid'>
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className='stats-section'>
        <div className='container'>
          <div className='stats-grid'>
            <div className='stat-item'>
              <h3>50+</h3>
              <p>Tech Events</p>
            </div>
            <div className='stat-item'>
              <h3>1K+</h3>
              <p>Community Members</p>
            </div>
            <div className='stat-item'>
              <h3>15+</h3>
              <p>Technology Categories</p>
            </div>
            <div className='stat-item'>
              <h3>100%</h3>
              <p>Free to Use</p>
            </div>
          </div>
        </div>
      </section>
      <section className='cta-section'>
        <div className='container'>
          <div className='cta-content'>
            <h2>Want to list your event?</h2>
            <p>
              Reach thousands of tech enthusiasts by adding your event to our
              calendar
            </p>
            <Link to='/signin' className='cta-button'>
              Add Your Event
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default HomePage
// components/HomePage.js (updated with full-screen hero)
