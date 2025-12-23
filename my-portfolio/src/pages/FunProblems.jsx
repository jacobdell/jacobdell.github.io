import React from 'react';
import { Link } from 'react-router-dom';

export default function FunProblems() {
  return (
    <main className="container">
      <section className="fun-box">
        <h2>Fun Problems</h2>
        <p>In this section, I share interesting and challenging problems I’ve explored both in algorithms classes and during my free time.</p>

        <div className="problems-grid">
          <article className="problem-card">
            <h3>Egyptian Fractions Puzzle</h3>
            <p className="muted">A neat problem with a greedy algorithm.</p>
            <div className="project-links">
                
                      <a
            href="/problems/Egyptian_Fractions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >
            Read Write-Up
            </a>

            <a
            href="https://github.com/jacobdell/Egyptian-Fractions/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            >
            Code
            </a>
                </div>    
      
          </article>

          <article className="problem-card">
            <h3>Arbitrage Detection</h3>
            <p className="muted">An applicable graph problem.</p>
            <div className="project-links">
                
                      <a
            href="/problems/Arbitrage_Detection.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >
            Read Write-Up
            </a>

            <a
            href="https://github.com/jacobdell/Arbitrage-Detection/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            >
            Code
            </a>
                </div>  
          </article>


          <article className="problem-card">
            <h3>More to come!</h3>
             
          </article>
          {/* Add more cards here */}
        </div>
      </section>
    </main>
  );
}
