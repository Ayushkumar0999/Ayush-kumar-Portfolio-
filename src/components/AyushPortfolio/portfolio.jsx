import "./portfolio.css";
import { useEffect, useState } from "react";

function TypingText() {
  const roles = [
    "MERN Full Stack Developer With AI",
    "React Developer",
    "Frontend Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text.length === currentRole.length) {
          setTimeout(() => {
            setDeleting(true);
          }, 1000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);

          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <h2 className="hero-role">
      <span className="typing-text">{text}</span>

      <span className="typing-cursor">|</span>
    </h2>
  );
}

export function Portfolio() {
  const skills = [
    { name: "HTML5", icon: "bi-filetype-html" },
    { name: "CSS3", icon: "bi-filetype-css" },
    { name: "JavaScript", icon: "bi-filetype-js" },
    { name: "React.js", icon: "bi-code-slash" },
    { name: "Node.js", icon: "bi-server" },
    { name: "Express.js", icon: "bi-diagram-3" },
    { name: "MongoDB", icon: "bi-database" },
    { name: "Bootstrap", icon: "bi-bootstrap" },
    { name: "Git & GitHub", icon: "bi-github" },
    { name: "REST API", icon: "bi-cloud-arrow-up" },
    { name: "JWT", icon: "bi-shield-lock" },
    { name: "AI Integration", icon: "bi-robot" },
  ];

  const projects = [
    {
      title: "Travel Everywhere",
      description:
        "A travel management web application built using React, Node.js, Express.js and MongoDB.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      icon: "bi-airplane",
      github: "https://github.com/Ayushkumar0999/Travel-Everywhere-Project",
      live: "#",
    },
    {
      title: "Video Library",
      description:
        "A video library application with a modern interface for managing and browsing video content.",
      tech: ["React", "JavaScript", "Node.js", "MongoDB"],
      icon: "bi-play-circle",
      github: "https://github.com/Ayushkumar0999",
      live: "#",
    },
    {
      title: "Amazon Shopping",
      description:
        "An e-commerce inspired shopping website developed using React with reusable components.",
      tech: ["React", "JavaScript", "Bootstrap", "Vite"],
      icon: "bi-cart3",
      github: "https://github.com/Ayushkumar0999/Amazon-shopping-Web",
      live: "#",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top portfolio-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            <span className="brand-symbol">&lt;/&gt;</span> Ayush Kumar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item ms-lg-3">
                <a href="/A_K Resume.pdf" className="btn resume-btn" download>
                  <i className="bi bi-download me-2"></i>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-section">
        <div className="hero-particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="container position-relative">
          <div className="row align-items-center min-vh-100">
            {/* LEFT CONTENT */}
            <div className="col-lg-7 hero-content">
              <div className="hero-intro">
                <span className="intro-line"></span>
                <span>Hello, I'm</span>
              </div>

              <h1 className="hero-title">
                Ayush <span>Kumar</span>
              </h1>

              {/* <h2 className="hero-role">
          <span className="typing-text">
            MERN Full Stack Developer
          </span>
          <span className="typing-cursor">|</span>
        </h2> */}
              <TypingText />

              <p className="hero-description">
                I build modern, responsive and user-friendly web applications
                using the MERN stack and AI technologies.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary custom-btn">
                  View My Work
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>

                <a href="#contact" className="btn btn-outline-light custom-btn">
                  Contact Me
                </a>
              </div>

              {/* SOCIAL ICONS */}
              <div className="social-links">
                <a
                  href="https://github.com/Ayushkumar0999"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="mailto:Ayushkumaar2712@gmail.com" aria-label="Email">
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-5">
              <div className="profile-wrapper">
                {/* Glow */}
                <div className="profile-glow"></div>

                {/* Rotating circle */}
                <div className="rotating-ring"></div>

                {/* Image */}
                <div className="profile-image-container">
                  <img
                    src="/ak photo.jpg"
                    alt="Ayush Kumar - MERN Full Stack Developer"
                    className="profile-image"
                  />
                </div>

                {/* Floating Skills */}

                <div className="floating-badge badge-one">
                  <i className="bi bi-code-slash"></i>
                  React
                </div>

                <div className="floating-badge badge-two">
                  <i className="bi bi-database"></i>
                  MongoDB
                </div>

                <div className="floating-badge badge-three">
                  <i className="bi bi-robot"></i>
                  AI
                </div>

                {/* Decorative dots */}
                <div className="decorative-dot dot-one"></div>
                <div className="decorative-dot dot-two"></div>
                <div className="decorative-dot dot-three"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="scroll-indicator">
          <span>Scroll Down</span>
          <i className="bi bi-chevron-down"></i>
        </a>
      </section>
      {/* About */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="section-title">
            <p>GET TO KNOW ME</p>
            <h2>
              About <span>Me</span>
            </h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="about-box">
                <div className="about-icon">
                  <i className="bi bi-code-square"></i>
                </div>

                <h3>MERN Full Stack Developer</h3>

                <p>
                  Building complete web applications from frontend interfaces to
                  backend APIs and databases.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="about-content">
                <h3>
                  Passionate about creating <span>web experiences</span>
                </h3>

                <p>
                  I am a Computer Science graduate and a MERN Full Stack
                  Developer. I have completed my B.Tech in Computer Science and
                  training in MERN Full Stack with AI.
                </p>

                <p>
                  I enjoy developing responsive web applications, REST APIs,
                  authentication systems and integrating AI features into modern
                  web applications.
                </p>

                <div className="row mt-4">
                  <div className="col-sm-6 info-item">
                    <strong>Education</strong>
                    <p>B.Tech - Computer Science</p>
                  </div>

                  <div className="col-sm-6 info-item">
                    <strong>Specialization</strong>
                    <p>MERN Stack + AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-padding dark-section">
        <div className="container">
          <div className="section-title">
            <p>MY EXPERTISE</p>
            <h2>
              Technical <span>Skills</span>
            </h2>
          </div>

          <div className="row g-4">
            {skills.map((skill, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="skill-card">
                  <i className={`bi ${skill.icon}`}></i>

                  <h5>{skill.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-padding">
        <div className="container">
          <div className="section-title">
            <p>MY RECENT WORK</p>
            <h2>
              Featured <span>Projects</span>
            </h2>
          </div>

          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="project-card">
                  <div className="project-icon">
                    <i className={`bi ${project.icon}`}></i>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <i className="bi bi-github"></i> GitHub
                    </a>

                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo
                      <i className="bi bi-arrow-up-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding dark-section">
        <div className="container">
          <div className="section-title">
            <p>MY JOURNEY</p>
            <h2>
              Education & <span>Training</span>
            </h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>2022 - 2026</span>

                <h3>B.Tech - Computer Science</h3>

                <h5>IIMT, Saharanpur</h5>

                <p>
                  Completed Bachelor of Technology in Computer Science with
                  focus on software development and web technologies.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>Training</span>

                <h3>MERN Full Stack with AI</h3>

                <h5>Ducat, Noida</h5>

                <p>
                  Hands-on training in React, Node.js, Express.js, MongoDB, REST
                  APIs and AI integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <div className="section-title">
            <p>GET IN TOUCH</p>
            <h2>
              Let's <span>Connect</span>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-card">
                <h3>Have a project or opportunity?</h3>

                <p>
                  I'm currently open to entry-level opportunities, internships
                  and exciting projects.
                </p>

                <div className="contact-info">
                  <a href="mailto:Ayushkumaar2712@gmail.com">
                    <i className="bi bi-envelope"></i>
                    Ayushkumaar2712@gmail.com
                  </a>
                </div>

                <div className="contact-buttons">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light"
                  >
                    <i className="bi bi-github me-2"></i>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <h4>
            <span>&lt;/&gt;</span> Ayush Kumar
          </h4>

          <p>MERN Full Stack Developer | AI Enthusiast</p>

          <div className="footer-social">
            <a
              href="https://github.com/Ayushkumar0999"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="mailto:Ayushkumaar2712@gmail.com">
              <i className="bi bi-envelope"></i>
            </a>
          </div>

          <hr />

          <small>© 2026 Ayush Kumar. All Rights Reserved.</small>
        </div>
      </footer>
    </>
  );
}
