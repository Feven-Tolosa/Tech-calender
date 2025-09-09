import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div className='about-page'>
      <Navbar />

      <div className='about-hero'>
        <div className='about-hero-content'>
          <h1>About Tech Events Calendar</h1>
          <p>Connecting the tech community through events</p>
        </div>
      </div>

      <div className='about-content'>
        <div className='container'>
          <section className='about-section'>
            <div className='about-text'>
              <h2>Our Mission</h2>
              <p>
                Tech Events Calendar is dedicated to bringing the technology
                community together by providing a comprehensive platform for
                discovering, sharing, and managing tech events worldwide. We
                believe in the power of connection, learning, and innovation
                that happens when tech enthusiasts gather.
              </p>
            </div>
            <div className='about-image'>
              <img
                className='about-image'
                src='/images/bg_image.png'
                alt='Tech Events'
              />
            </div>
          </section>

          <section className='about-section reverse'>
            <div className='about-text'>
              <h2>What We Offer</h2>
              <p>
                Our platform features a curated selection of technology
                conferences, workshops, meetups, and hackathons. From web
                development and AI to cybersecurity and blockchain, we cover all
                areas of technology to help you stay updated with the latest
                trends and networking opportunities.
              </p>
            </div>
            <div className='about-image'>
              <img
                className='about-image'
                src='/images/image1.png'
                alt='Tech Events'
              />
            </div>
          </section>

          <section className='about-section'>
            <div className='about-text'>
              <h2>Our Vision</h2>
              <p>
                We envision a world where technology professionals and
                enthusiasts can easily find and participate in events that
                inspire growth, collaboration, and innovation. By fostering a
                vibrant community of tech enthusiasts, we aim to create a
                platform that fosters a sense of belonging and connection.
              </p>
            </div>
            <div className='about-image'>
              <img
                className='about-image'
                src='/images/image2.png'
                alt='Tech Events'
              />
            </div>
          </section>

          <section className='features-section'>
            <h2>Why Choose Tech Events Calendar?</h2>
            <div className='features-grid'>
              <div className='feature-card'>
                <div className='feature-icon'>
                  <i className='fas fa-search'></i>
                </div>
                <h3>Easy Discovery</h3>
                <p>
                  Find relevant tech events based on your interests and location
                </p>
              </div>

              <div className='feature-card'>
                <div className='feature-icon'>
                  <i className='fas fa-bell'></i>
                </div>
                <h3>Stay Updated</h3>
                <p>
                  Get notifications about upcoming events you're interested in
                </p>
              </div>

              <div className='feature-card'>
                <div className='feature-icon'>
                  <i className='fas fa-users'></i>
                </div>
                <h3>Community Driven</h3>
                <p>
                  Join a growing community of tech enthusiasts and professionals
                </p>
              </div>
            </div>
          </section>

          <section className='team-section'>
            <h2>Behind the Project</h2>
            <p className='team-description'>
              Tech Events Calendar was created by a team of developers
              passionate about technology and community building. We're
              constantly working to improve the platform and add new features.
            </p>
            <div className='team-grid'>
              <div className='team-member'>
                <div className='member-avatar'>
                  <i className='fas fa-user'></i>
                </div>
                <h3>Developer</h3>
                <p>Frontend Specialist</p>
              </div>
              <div className='team-member'>
                <div className='member-avatar'>
                  <i className='fas fa-user'></i>
                </div>
                <h3>Developer</h3>
                <p>Frontend Specialist</p>
              </div>
              <div className='team-member'>
                <div className='member-avatar'>
                  <i className='fas fa-user'></i>
                </div>
                <h3>Developer</h3>
                <p>Frontend Specialist</p>
              </div>
              <div className='team-member'>
                <div className='member-avatar'>
                  <i className='fas fa-user'></i>
                </div>
                <h3>Developer</h3>
                <p>Frontend Specialist</p>
              </div>
              <div className='team-member'>
                <div className='member-avatar'>
                  <i className='fas fa-user'></i>
                </div>
                <h3>Developer</h3>
                <p>Frontend Specialist</p>
              </div>
              <div className='team-member'>
                <div className='member-avatar'>
                  <i className='fas fa-user'></i>
                </div>
                <h3>Developer</h3>
                <p>Frontend Specialist</p>
              </div>
              <div className='team-member'>
                <div className='member-avatar'>
                  <i className='fas fa-user'></i>
                </div>
                <h3>Designer</h3>
                <p>UI/UX Expert</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
