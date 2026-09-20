import { FaDownload } from 'react-icons/fa6';
import './Hero.css';
import { cvUrl, profile } from '../data/profile';
import useTypewriter from '../hooks/useTypewriter';
import Starfield from './Starfield';

function Hero() {
  const { text } = useTypewriter(profile.roles, {
    typeSpeed: 95,
    deleteSpeed: 42,
    pauseDuration: 1200,
  });

  return (
    <header id="home" className="hero">
      <Starfield className="hero-starfield" starCount={90} />

      <div className="container hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            {profile.title}
          </p>

          <h1 className="hero-title">
            <span className="title-muted">Hello, I&apos;m</span>
            <span className="title-name">{profile.name}</span>
          </h1>

          <div className="role-lockup" aria-live="polite" aria-atomic="true">
            <span className="role-prefix">I build</span>
            <span className="typing-text">{text}</span>
            <span className="hero-cursor" aria-hidden="true" />
          </div>

          <p className="hero-bio">{profile.bio}</p>

          <div className="hero-actions">
            <a className="primary-btn" href="#projects">View projects</a>
            <a className="secondary-btn cv-btn" href={cvUrl} target="_blank" rel="noreferrer" download aria-label="Download my CV">
              <FaDownload aria-hidden="true" />
              Download CV
            </a>
          </div>

          <div className="hero-meta" aria-label="Key professional markers">
            <span className="meta-pill">
              <span className="meta-label">Based in</span>
              <strong>{profile.location}</strong>
            </span>
            <span className="meta-pill">
              <span className="meta-label">Focus</span>
              <strong>full-stack</strong>
            </span>
            <span className="meta-pill">
              <span className="meta-label">Mode</span>
              <strong>available</strong>
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait and profile highlight">
          <div className="hero-visual-panel">
            <div className="panel-header">
              <span className="panel-dot" aria-hidden="true" />
              <span>{profile.name}</span>
              <span>Engineer</span>
            </div>

            <div className="portrait-shell">
              <img src="/portrait.jpg" alt="Portrait of Iheb Ncir" />
            </div>

            <div className="panel-footer">
              <span className="panel-status">{profile.availability}</span>
              <span>Telco / Dev</span>
            </div>
          </div>

          <aside className="floating-card card-top" aria-label="Systems overview">
            <strong>Systems</strong>
            <span>Network • Product • Security</span>
            <span className="card-pill">Adaptive</span>
          </aside>

          <aside className="floating-card card-bottom" aria-label="Knowledge areas">
            <strong>Driven by</strong>
            <span>Curiosity + build loops</span>
            <span className="card-pill">Research</span>
          </aside>
        </div>
      </div>
    </header>
  );
}

export default Hero;
