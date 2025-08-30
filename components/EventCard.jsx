// components/EventCard.js
import React from 'react'

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className='event-card'>
      <div className='event-image'>
        <img src={event.image} alt={event.title} />
      </div>
      <div className='event-content'>
        <h3>{event.title}</h3>
        <p className='event-date'>{formatDate(event.date)}</p>
        <p className='event-description'>{event.description}</p>
        <button className='event-button'>Learn More</button>
      </div>
    </div>
  )
}

export default EventCard
