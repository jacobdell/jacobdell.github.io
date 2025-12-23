// src/pages/Ros2Robot.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Import your assets from src/assets
import robotImg1 from '../assets/robot.png';
import robotImg2 from '../assets/robot_side.jpg';
import robotDemo from '../assets/demo.mov';

export default function Ros2Robot() {
  const images = [
    { src: robotImg1, alt: 'Robot Front View' },
    { src: robotImg2, alt: 'Robot Manipulating Blocks' },
  ];

  // Simple slideshow state
  const [current, setCurrent] = useState(0);
  const autoRef = useRef(null);

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const goTo = (i) => setCurrent(i);

  useEffect(() => {
    // autoplay every 4s
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4000);
    return () => clearInterval(autoRef.current);
  }, []);

  return (
    <main className="container">
      <h2>Autonomous ROS2 Robot</h2>

      <h3>Project Highlights</h3>
      <div className="slideshow" aria-roledescription="carousel">
        <button className="slide-arrow prev" onClick={() => prev()} aria-label="Previous slide">‹</button>
        <div className="slide-frame">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className={`project-image ${i === current ? 'active' : ''}`}
              style={{ display: i === current ? 'block' : 'none' }}
            />
          ))}
        </div>
        <button className="slide-arrow next" onClick={() => next()} aria-label="Next slide">›</button>


      </div>

      <hr className="project-card" />

      <p>
        This project, completed as a team of four during IAP 2025, is an autonomous robot built using ROS2. Our robot earned <strong>second place</strong> in the competition. Key features include:
      </p>
      <ul>
        <li>YOLO-based object detection to identify and categorize colored blocks</li>
        <li>PID control for smooth and precise robot movement</li>
        <li>Homography techniques to determine block and robot locations</li>
        <li>Integration with a Raspberry Pi for real-time processing and actuation</li>
        <li>Autonomous decision-making for block manipulation and task completion</li>
      </ul>

      <h3>Project Demo</h3>
      <video
        controls
        width="640"
        height="360"
        style={{ display: "block", margin: "20px auto", borderRadius: "8px" }}
      >
        <source src={robotDemo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a
          href="https://github.com/jacobdell/MASLAB"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          View on GitHub
        </a>
      </p>
    </main>
  );
}
