import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import FunProblems from './pages/FunProblems';
import Ros2Robot from './pages/Ros2Robot';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function App() {
  const [dark, setDark] = useState(false);

  const [initializedTheme, setInitializedTheme] = useState(false);

  const getInitialDark = () => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    } catch (e) {}
    // Default to dark when no saved preference is present
    return true;
  };

  useEffect(() => {
    if (!initializedTheme) {
      setDark(getInitialDark());
      setInitializedTheme(true);
      return;
    }

    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  }, [dark, initializedTheme]);

  return (
    <div className="app-wrapper">
      <Router>
        <header className="navbar">
          <h1>Jacob Dell</h1>
          <nav>
            <NavLink to="/" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Home</NavLink>
            <NavLink to="/fun" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Fun Problems</NavLink>
          </nav>

          <div className="nav-controls">
            <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? 'Light' : 'Dark'}</button>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fun" element={<FunProblems />} />
          <Route path="/ros2-robot" element={<Ros2Robot />} />
      
        </Routes>

        <footer className="footer">
          <p>© 2025 Jacob Dell</p>
          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/jacob-dell-b55b03308"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/jacobdell"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </footer>
      </Router>
    </div>
  );
}
