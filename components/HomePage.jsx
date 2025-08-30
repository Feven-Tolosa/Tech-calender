// components/HomePage.js (updated with full-screen hero)
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import EventCard from './EventCard'

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

      <Footer />
    </div>
  )
}

export default HomePage
// components/HomePage.js (updated with full-screen hero)
