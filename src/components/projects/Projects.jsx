import { Link } from 'react-router-dom';
import SkillBridgeVisual from './SkillBridgeVisual';
import skillBridgeProject from './projectsData';

function Projects() {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div className="projects-grid-bg" aria-hidden="true" />
      <div className="container projects-container">
        <header className="projects-header project-reveal project-reveal-one">
          <span className="section-eyebrow"><i />02 / Projects</span>
          <h2 id="projects-title">Systems built for <span>real connection.</span></h2>
          <p>A closer look at the platforms and engineering ideas shaping my work.</p>
        </header>
        <article className="project-feature project-reveal project-reveal-two">
          <div className="project-visual-column">
            <SkillBridgeVisual />
            <div className="project-visual-meta"><span>STACK // MERN + SOCKET.IO</span><span>DEPLOYMENT // NETLIFY / RENDER</span></div>
          </div>
          <div className="project-info">
            <div className="project-info-top"><span className="project-category">{skillBridgeProject.category}</span><span className="project-index">PROJECT / 01</span></div>
            <h3>SkillBridge</h3>
            <span className="project-status"><i />{skillBridgeProject.status}</span>
            <p className="project-tagline">{skillBridgeProject.description}</p>
            <p className="project-overview">A Full-Stack platform currently under development that connects learners with training centers through a centralized digital learning and training ecosystem.</p>
            <div className="project-tech-list" aria-label="SkillBridge technologies">{skillBridgeProject.featuredTechnologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <ul className="project-feature-list">{skillBridgeProject.features.map((feature) => <li key={feature}><i />{feature}</li>)}</ul>
            <div className="project-meta-lines"><span>AI // N8N + AI AGENT</span><span>STORAGE // SUPABASE</span><span>REGION // TUNISIA</span></div>
            <div className="project-actions"><a className="button button-primary" href={skillBridgeProject.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View SkillBridge live project">Live demo <span aria-hidden="true">↗</span></a><Link to="/projects/skillbridge" className="button button-secondary">View project <span aria-hidden="true">→</span></Link></div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
