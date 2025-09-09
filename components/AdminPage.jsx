// components/AdminPage.js
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const AdminPage = ({ events, addEvent, deleteEvent, updateEvent }) => {
  const navigate = useNavigate()
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated')
    if (!isAuthenticated) {
      navigate('/signin')
    }
  }, [navigate])
  const [isEditing, setIsEditing] = useState(false)
  const [currentEvent, setCurrentEvent] = useState({
    id: '',
    title: '',
    image: '',
    description: '',
    date: '',
  })
  const [showForm, setShowForm] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentEvent({
      ...currentEvent,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isEditing) {
      updateEvent(currentEvent)
    } else {
      addEvent(currentEvent)
    }
    setCurrentEvent({
      id: '',
      title: '',
      image: '',
      description: '',
      date: '',
    })
    setIsEditing(false)
    setShowForm(false)
  }

  const handleEdit = (event) => {
    setCurrentEvent(event)
    setIsEditing(true)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(id)
    }
  }

  const cancelEdit = () => {
    setCurrentEvent({
      id: '',
      title: '',
      image: '',
      description: '',
      date: '',
    })
    setIsEditing(false)
    setShowForm(false)
  }

  return (
    <div className='admin-page'>
      <Navbar />

      <div className='admin-container'>
        <h1>Event Management</h1>

        <button
          className='add-event-btn'
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add New Event'}
        </button>

        {showForm && (
          <form className='event-form' onSubmit={handleSubmit}>
            <h2>{isEditing ? 'Edit Event' : 'Add New Event'}</h2>

            <div className='form-group'>
              <label htmlFor='title'>Event Title</label>
              <input
                type='text'
                id='title'
                name='title'
                value={currentEvent.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='image'>Event Image URL</label>
              <input
                type='url'
                id='image'
                name='image'
                value={currentEvent.image}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                name='description'
                value={currentEvent.description}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='date'>Event Date</label>
              <input
                type='date'
                id='date'
                name='date'
                value={currentEvent.date}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className='form-actions'>
              <button type='submit'>
                {isEditing ? 'Update Event' : 'Add Event'}
              </button>
              {isEditing && (
                <button type='button' onClick={cancelEdit}>
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        )}

        <div className='events-list'>
          <h2>Current Events</h2>
          {events.length === 0 ? (
            <p>No events found. Add some events to get started.</p>
          ) : (
            <div className='admin-events-grid'>
              {events.map((event) => (
                <div key={event.id} className='admin-event-card'>
                  <img src={event.image} alt={event.title} />
                  <div className='admin-event-details'>
                    <h3>{event.title}</h3>
                    <p>{new Date(event.date).toLocaleDateString()}</p>
                    <div className='admin-event-actions'>
                      <button
                        className='edit-btn'
                        onClick={() => handleEdit(event)}
                      >
                        Edit
                      </button>
                      <button
                        className='delete-btn'
                        onClick={() => handleDelete(event.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AdminPage
