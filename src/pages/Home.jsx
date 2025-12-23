import React from 'react';
import profilePic from '../assets/headshot.png';
import lockheedLogo from '../assets/lockheed.jpeg';
import weatherImg from '../assets/weather.png'
import robot from '../assets/robot.png'
import neuralnet from '../assets/neural_network.png'
import signal from '../assets/signal.png'
import mixLogo from '../assets/MIx.png';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <main className="container">
      {/* About Me */}
      <section className="about-box">
        <img src={profilePic} alt="Jacob Dell" className="profile-pic" />
        <h2>About Me</h2>
        <hr className="course-divider" />

        <p>
        I am a second-year undergraduate at MIT, studying Electrical Engineering with Computing (6-5). 
        I am passionate about all things EECS, especially Machine Learning, Algorithm Design, and Digital Design. 
        I enjoy problem solving, teaching, and I thrive in team environments, including on the &nbsp; 
        <a 
            href="https://mitathletics.com/sports/football" 
            target="_blank" 
            rel="noopener noreferrer"
        > MIT football team</a>, where I play defensive line.
        </p>


        <a
          href = 'resume.pdf'
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
        >
          View My Resume
        </a>
      </section>

      <section className="education-box">
        <h2>Education</h2>
        <hr className="course-divider" />

        <h3>Massachusetts Institute of Technology</h3>
        <p>September 2024 - Present</p>
        <p>B.S. in Electrical Engineering with Computing | GPA: 5.0</p>

        <div className="coursework">
          <h4 style={{ textDecoration: 'underline' }}>Relevant Coursework</h4>

          <div className="course-column">
            <h4>Theory</h4>
            <ul>
              <li>Introduction to Algorithms</li>
              <li>Computation Structures</li>
              <li>Signal Processing</li>
              <li>Linear Algebra</li>
              <li>Differential Equations</li>
              <li>Physics I & II</li>
              <li>Multivariable Calculus</li>
            </ul>
          </div>

          <div className="course-column">
            <h4>Application Based</h4>
            <ul>
              <li>Machine Learning for Signal Processing</li>
              <li>Machine Learning</li>
              <li>Circuits & Electronics</li>
              <li>Programming</li>
              <li>Low-Level Programming</li>
            </ul>
          </div>
        </div>
      </section>



        <section className="experience-section">
        <h2>Experience</h2>
        <hr className="course-divider" />

        <div className="experience-card">
            <img src={lockheedLogo} alt="Lockheed Martin Logo" className="experience-logo" />


            <div className="experience-content">
            <h3>Software Engineering Intern — Lockheed Martin</h3>
            <p>May 2025 – August 2025</p>
            <ul>
                <li>Developed and maintained web applications using ASP.NET MVC (C#) and Web Forms (VB.NET), improving UX, performance, and code quality.</li>
                <li>Utilized SQL for querying, updates, and stored procedures to improve efficiency.</li>
                <li>Collaborated with the product team in Agile Scrum using Jira; resolved 55+ reported issues and delivered iterative improvements.</li>
            </ul>
            </div>
        </div>

        <div className="experience-card">
            <img src={mixLogo} alt="MIT Logo" className="experience-logo" />
            <div className="experience-content">
            <h3>Undergraduate Researcher — MIT Mission Innovation X</h3>
            <p>September 2025 – Present</p>
            <ul>
                <li>Design ML-based weather models using high-dimensional datasets, GNNs, and edge computing.</li>
                <li>Conduct literature reviews and optimize neural network architectures for accuracy and efficiency using GraphCast models.</li>
            </ul>
            </div>
        </div>



</section>








      <section className="projects-box">
        <h2>Projects</h2>
        <div className="projects-grid">
            <div className="project-card">
            <img src={robot} alt="Autonomous Robot" className="project-image" />
            <h4>Autonomous ROS2 Robot</h4>
            <p className="muted">Built an autonomous robot that uses real-time color vision for object detection and PID controls for precise navigation.</p>
            <div className="project-links">
                <Link to="/ros2-robot">View Project</Link>
            </div>
            </div>


  
            <div className="project-card">
            <img 
            src={neuralnet} 
            alt="Neural Network" 
            className="project-image" 
            style={{ width: "100%" }} 
            />            
            <h4>Mnist Digit Classification</h4>
            <p className="muted">Implemented a fully connected neural network in NumPy to classify handwritten digits from the MNIST dataset.</p>
            <div className="project-links">
                <a
                    href="https://github.com/jacobdell/Nueral-Network-Library"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    View on GitHub
                </a>
                </div>
            </div>

        <div className="project-card">
        <img src={weatherImg} alt="Weather Forecasting project" className="project-image" />
            <h4>Weather Forecasting with ML</h4>
            <p className="muted">
                Statistical and ML Models for Real-Time Forecasting.
            </p>
            <div className="project-links">
                <a
                href= 'weather_forecasting_slides.pdf'
                target="_blank"
                rel="noopener noreferrer"
                >
                View Slides (PDF)
                </a>
        </div>
</div>


        <div className="project-card">
        <img src={signal} alt="Signal Processing" className="project-image" />
            <h4>Signal Processing Projects</h4>
            <p className="muted">
                Various Signal Processing Projects.
            </p>
            <div className="project-links">
                <a
                href= 'https://github.com/jacobdell/Signal-Processing-Projects'
                target="_blank"
                rel="noopener noreferrer"
                >
                View on GitHub
                </a>
        </div>
</div>
        </div>
      </section>

      <section className="about-box extracurriculars-box">
        <h2>Extracurriculars</h2>
        <hr className="course-divider" />
        <ul className="extracurriculars-list">
          <li className="extracurricular-item">
            <div className="role">Sigma Chi Fraternity</div>
            <div className="desc">As house manager, I manage house operations, perform minor maintenance, and procure necessary functional supplies.</div>
          </li>

          <li className="extracurricular-item">
            <div className="role">MIT Football</div>
            <div className="desc">I am a defensive lineman on MIT's NCAA Division III varsity football team, balancing a 20+ hour/week athletic commitment with a full-time student workload.</div>
          </li>

          <li className="extracurricular-item">
            <div className="role">MIT Physics</div>
            <div className="desc">I am an Undergraduate Teaching Assistant for Kinematics as well as Electricity & Magnetism. I assist students with group problem solving sessions, and facilitate discussion.</div>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <a
          href="mailto:jacob215@mit.edu"
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
