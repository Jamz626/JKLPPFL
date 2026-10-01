import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Git'];

const projects = [
  {
    number: '01',
    title: 'Student Enrollment System',
    description: 'A simple system for managing student information and enrollment records.',
    tags: ['Python', 'PostgreSQL']
  },
  {
    number: '02',
    title: 'BiteID',
    description: 'A mobile app concept that helps users identify possible insect bites and view basic first-aid information.',
    tags: ['Flutter', 'AI', 'SQLite']
  },
  {
    number: '03',
    title: 'Personal Portfolio',
    description: 'A responsive website that introduces me, highlights my skills, and showcases my projects.',
    tags: ['React', 'Vite', 'CSS']
  }
];

function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="logo" href="#home">JAM<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot"></span> IT STUDENT · ASPIRING DEVELOPER</p>
            <h1>Hi, I'm <span>Jam.</span><br />I build things<br className="desktop-break" /> with technology.</h1>
            <p className="hero-text">I’m an Information Technology student who enjoys learning programming, solving problems, and creating useful digital experiences.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my projects <span>↗</span></a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative code illustration">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="code-card">
              <div className="window-dots"><i></i><i></i><i></i><span>about-me.js</span></div>
              <div className="code-lines">
                <p><b>const</b> student = {'{'}</p>
                <p className="indent"><em>name</em>: <strong>'Jam'</strong>,</p>
                <p className="indent"><em>course</em>: <strong>'BSIT'</strong>,</p>
                <p className="indent"><em>passion</em>: <strong>'technology'</strong>,</p>
                <p className="indent"><em>learning</em>: [</p>
                <p className="indent2"><strong>'web development'</strong>,</p>
                <p className="indent2"><strong>'software'</strong></p>
                <p className="indent">]</p>
                <p>{'}'};</p>
                <p className="comment">// always learning ✦</p>
              </div>
            </div>
            <div className="floating-chip chip-top">{"<"} / {">"} <span>CODE</span></div>
            <div className="floating-chip chip-bottom"><span className="spark">✦</span> Keep learning</div>
          </div>
          <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label"><span>01</span> ABOUT ME</div>
          <div className="about-content">
            <h2>Curious mind.<br /><span>Creative problem solver.</span></h2>
            <p>I’m currently studying Information Technology and building my skills one project at a time. I like exploring how technology works and turning ideas into practical applications.</p>
            <p>My goal is to keep improving as a developer, collaborate with others, and create technology that can help people.</p>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-label"><span>02</span> MY TOOLKIT</div>
          <div className="section-heading">
            <h2>Skills & <span>technologies</span></h2>
            <p>Tools I’m learning and using in my projects.</p>
          </div>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">0{index + 1}</span>
                <span className="skill-symbol">{['5', '✳', 'JS', '⚛', 'Py', '⌘'][index]}</span>
                <strong>{skill}</strong>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-label"><span>03</span> SELECTED WORK</div>
          <div className="section-heading project-heading">
            <h2>Projects I’m <span>working on</span></h2>
            <p>A few examples of my school and personal work.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <span className="project-link" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-label"><span>04</span> CONTACT</div>
          <div className="contact-content">
            <p className="eyebrow">HAVE A PROJECT OR IDEA?</p>
            <h2>Let’s make something<br /><span>meaningful.</span></h2>
            <p className="contact-text">I’m open to learning opportunities, collaboration, and connecting with fellow tech enthusiasts.</p>
            <a className="button primary" href="mailto:yourname@email.com">yourname@email.com <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">JAM<span>.</span></a>
        <p>Designed & built by Jam · IT Student</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
