import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const EventSingle = ({ events }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find the event with the matching ID
    const foundEvent = events.find((e) => e.id === parseInt(id))

    if (foundEvent) {
      setEvent(foundEvent)
    } else {
      // Redirect to 404 page or homepage if event not found
      navigate('/')
    }

    setLoading(false)
  }, [id, events, navigate])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  if (loading) {
    return (
      <div className='event-single-page'>
        <Navbar />
        <div className='loading-spinner'>Loading event details...</div>
        <Footer />
      </div>
    )
  }

  if (!event) {
    return (
      <div className='event-single-page'>
        <Navbar />
        <div className='event-not-found'>
          <h2>Event Not Found</h2>
          <p>The event you're looking for doesn't exist.</p>
          <Link to='/' className='cta-button'>
            Back to Events
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className='event-single-page'>
      <Navbar />

      <div
        className='event-hero'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${event.image})`,
        }}
      >
        <div className='container'>
          <Link to='/' className='back-button'>
            <i className='fas fa-arrow-left'></i> Back to Events
          </Link>
          <div className='event-hero-content'>
            <h1>{event.title}</h1>
            <p className='event-date-large'>{formatDate(event.date)}</p>
          </div>
        </div>
      </div>

      <div className='event-details'>
        <div className='container'>
          <div className='event-details-grid'>
            <div className='event-info'>
              <h2>Event Details</h2>
              <p className='event-full-description'>{event.description}</p>

              <div className='event-meta'>
                <div className='meta-item'>
                  <i className='fas fa-calendar-alt'></i>
                  <div>
                    <h4>Date & Time</h4>
                    <p>{formatDate(event.date)} at 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className='meta-item'>
                  <i className='fas fa-map-marker-alt'></i>
                  <div>
                    <h4>Location</h4>
                    <p>Tech Convention Center, Silicon Valley</p>
                  </div>
                </div>

                <div className='meta-item'>
                  <i className='fas fa-users'></i>
                  <div>
                    <h4>Attendees</h4>
                    <p>200+ tech enthusiasts registered</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='event-sidebar'>
              <div className='register-box'>
                <h3>Register for this Event</h3>
                <p>Secure your spot at this exciting tech event</p>
                <button className='register-button'>Register Now</button>
                <p className='register-note'>
                  Free registration • Limited seats available
                </p>
              </div>

              <div className='share-box'>
                <h4>Share this event</h4>
                <div className='share-buttons'>
                  <a href='#' className='share-button facebook'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href='#' className='share-button twitter'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#' className='share-button linkedin'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                  <a href='#' className='share-button link'>
                    <i className='fas fa-link'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='related-events'>
        <div className='container'>
          <h2>Other Events You Might Like</h2>
          <div className='events-grid'>
            {events
              .filter((e) => e.id !== event.id)
              .slice(0, 3)
              .map((relatedEvent) => (
                <div key={relatedEvent.id} className='event-card'>
                  <div className='event-image'>
                    <img src={relatedEvent.image} alt={relatedEvent.title} />
                  </div>
                  <div className='event-content'>
                    <h3>{relatedEvent.title}</h3>
                    <p className='event-date'>
                      {formatDate(relatedEvent.date)}
                    </p>
                    <p className='event-description'>
                      {relatedEvent.description.substring(0, 100)}...
                    </p>
                    <Link
                      to={`/events/${relatedEvent.id}`}
                      className='event-button'
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EventSingle
