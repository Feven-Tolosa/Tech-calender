import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './SignIn.css'

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Simple admin credentials (in a real app, this would be handled by a backend)
  const adminCredentials = {
    username: 'admin',
    password: 'admin123',
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value,
    })
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      if (
        credentials.username === adminCredentials.username &&
        credentials.password === adminCredentials.password
      ) {
        // Store auth status in localStorage
        localStorage.setItem('isAdminAuthenticated', 'true')
        navigate('/admin')
      } else {
        setError('Invalid username or password')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className='signin-page'>
      <Navbar />

      <div className='signin-container'>
        <div className='signin-form-wrapper'>
          <div className='signin-header'>
            <div className='signin-icon'>
              <i className='fas fa-lock'></i>
            </div>
            <h2>Admin Sign In</h2>
            <p>Enter your credentials to access the admin panel</p>
          </div>

          <form className='signin-form' onSubmit={handleSubmit}>
            {error && <div className='error-message'>{error}</div>}

            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <div className='input-with-icon'>
                <i className='fas fa-user'></i>
                <input
                  type='text'
                  id='username'
                  name='username'
                  value={credentials.username}
                  onChange={handleInputChange}
                  placeholder='Enter your username'
                  required
                />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <div className='input-with-icon'>
                <i className='fas fa-key'></i>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={credentials.password}
                  onChange={handleInputChange}
                  placeholder='Enter your password'
                  required
                />
              </div>
            </div>

            <button
              type='submit'
              className='signin-button'
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className='fas fa-spinner fa-spin'></i>
                  Signing In...
                </>
              ) : (
                <>
                  <i className='fas fa-sign-in-alt'></i>
                  Sign In
                </>
              )}
            </button>
          </form>

          <div className='signin-footer'>
            <p>Default credentials: admin / admin123</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SignIn
