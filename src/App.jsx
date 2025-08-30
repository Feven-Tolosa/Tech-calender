// App.js
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import AdminPage from '../components/AdminPage'
import HomePage from '../components/HomePage'

function App() {
  const [events, setEvents] = useState([])

  // Load events from localStorage on initial render
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('techEvents')) || []
    if (savedEvents.length === 0) {
      // Add some default events if none exist
      const defaultEvents = [
        {
          id: 1,
          title: 'React Conference 2023',
          image:
            'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          description:
            'Join us for the biggest React conference of the year featuring expert speakers and workshops.',
          date: '2023-11-15',
        },
        {
          id: 2,
          title: 'JavaScript World Summit',
          image:
            'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
          description:
            'The annual gathering of JavaScript developers from around the world.',
          date: '2023-12-05',
        },
        {
          id: 3,
          title: 'AI & Machine Learning Workshop',
          image:
            'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          description:
            'Hands-on workshop on the latest AI and machine learning techniques.',
          date: '2023-11-22',
        },
      ]
      setEvents(defaultEvents)
      localStorage.setItem('techEvents', JSON.stringify(defaultEvents))
    } else {
      setEvents(savedEvents)
    }
  }, [])

  // Update localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('techEvents', JSON.stringify(events))
  }, [events])

  const addEvent = (newEvent) => {
    const id =
      events.length > 0 ? Math.max(...events.map((event) => event.id)) + 1 : 1
    const eventWithId = { ...newEvent, id }
    setEvents([...events, eventWithId])
  }

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  const updateEvent = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    )
  }

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage events={events} />} />
          <Route
            path='/admin'
            element={
              <AdminPage
                events={events}
                addEvent={addEvent}
                deleteEvent={deleteEvent}
                updateEvent={updateEvent}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
