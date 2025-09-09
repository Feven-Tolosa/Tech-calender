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
            <h2>Behind the Project - Our Team</h2>
            <p className='team-description'>
              We're a diverse team of passionate individuals dedicated to
              creating the best tech event platform for our community.
            </p>

            {/* First Row - 4 Members */}
            <div className='team-grid first-row'>
              <div className='team-member'>
                <div className='member-image'>
                  <img
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
                    alt='Alex Johnson'
                  />
                </div>
                <h3>Yonatan </h3>
                <p>Project Lead</p>
                <div className='social-links'>
                  <a href='#'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-github'></i>
                  </a>
                </div>
              </div>

              <div className='team-member'>
                <div className='member-image'>
                  <img
                    src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80'
                    alt='Sarah Williams'
                  />
                </div>
                <h3>Iman</h3>
                <p>Frontend Developer</p>
                <div className='social-links'>
                  <a href='#'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-github'></i>
                  </a>
                </div>
              </div>

              <div className='team-member'>
                <div className='member-image'>
                  <img
                    src='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
                    alt='Michael Chen'
                  />
                </div>
                <h3>Rukia</h3>
                <p>Backend Developer</p>
                <div className='social-links'>
                  <a href='#'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-github'></i>
                  </a>
                </div>
              </div>

              <div className='team-member'>
                <div className='member-image'>
                  <img
                    src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80'
                    alt='Emily Rodriguez'
                  />
                </div>
                <h3>Nesria</h3>
                <p>UI/UX Designer</p>
                <div className='social-links'>
                  <a href='#'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-dribbble'></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Second Row - 3 Members */}
            <div className='team-grid second-row'>
              <div className='team-member'>
                <div className='member-image'>
                  <img
                    src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80'
                    alt='David Kim'
                  />
                </div>
                <h3>Ahlam</h3>
                <p>DevOps Engineer</p>
                <div className='social-links'>
                  <a href='#'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-github'></i>
                  </a>
                </div>
              </div>

              <div className='team-member'>
                <div className='member-image'>
                  <img
                    src='https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
                    alt='Priya Patel'
                  />
                </div>
                <h3>Abdulmejid</h3>
                <p>Data Analyst</p>
                <div className='social-links'>
                  <a href='#'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-medium'></i>
                  </a>
                </div>
              </div>

              <div className='team-member'>
                <div className='member-image'>
                  <img
                    src='https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
                    alt='Marcus Brown'
                  />
                </div>
                <h3>Ibtisam</h3>
                <p>React Developer</p>
                <div className='social-links'>
                  <a href='#'>
                    <i className='fab fa-linkedin'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </div>
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
