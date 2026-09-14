import { Link } from 'react-router-dom';
import tunisieTelecomExperience from './experiences/experiencesData';
import './ExperienceStyles.css';

function Experience() {
  const experience = tunisieTelecomExperience;

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="container experience-container">
        <header className="experience-header experience-reveal experience-reveal-one">
          <span className="section-eyebrow"><i />04 / Experience</span>
          <h2 id="experience-title">Professional Engineering Experience</h2>
          <p>Hands-on exposure to telecommunications infrastructure and network operations at a major telecommunications operator.</p>
        </header>

        <div className="experience-grid">
          <article className="experience-card experience-reveal experience-reveal-two">
            <div className="experience-card-header">
              <div className="experience-org-badge">
                <span className="exp-badge-type">INTERNSHIP</span>
              </div>
              <h3>{experience.title}</h3>
              <div className="experience-meta">
                <span className="exp-org">{experience.organization}</span>
                <span className="exp-separator">•</span>
                <span className="exp-location">Sfax, Tunisia</span>
              </div>
              <p className="experience-date">{experience.date}</p>
            </div>

            <p className="experience-category">{experience.category}</p>

            <p className="experience-description">
              {experience.description}
            </p>

            <div className="experience-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🌐</span>
                <span>Access Networks</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔧</span>
                <span>Maintenance</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📊</span>
                <span>IP-MSAN</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔍</span>
                <span>Troubleshooting</span>
              </div>
            </div>

            <Link to="/experience/tunisie-telecom" className="experience-link">
              View experience <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;
