import './projectDetailsStyles.css';
import ProjectTechnicalCaseStudy from './ProjectTechnicalCaseStudy';

function ProjectDetails({ project, onClose }) {
  return (
    <div className="project-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="skillbridge-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className="project-modal-header">
          <div><span className="project-eyebrow">Project / 01</span><h3 id="skillbridge-modal-title">{project.name}</h3><p>{project.category}</p></div>
          <button className="project-modal-close" type="button" onClick={onClose} aria-label="Close SkillBridge case study">×</button>
        </div>
        <div className="project-modal-body">
          <div className="project-copy-grid">
            <div><span className="project-detail-label">01 — Overview</span><p>SkillBridge is a Tunisian platform designed to connect learners with training centers and centralize the discovery, management and tracking of training programs.</p></div>
            <div><span className="project-detail-label">02 — Problem</span><p>Training opportunities are often distributed across different platforms and communication channels, making it difficult for learners to discover suitable programs and for training centers to efficiently manage their activities.</p></div>
            <div><span className="project-detail-label">03 — Solution</span><p>SkillBridge brings learners, training centers and administrators into a single platform with dedicated spaces, secure authentication, training management, reservations, communication, progress tracking and administrative supervision.</p></div>
          </div>
          <ProjectTechnicalCaseStudy project={project} />
        </div>
        <div className="project-modal-footer"><a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">View live project <span aria-hidden="true">↗</span></a><button className="button button-secondary" type="button" onClick={onClose}>Close case study</button></div>
      </section>
    </div>
  );
}

export default ProjectDetails;
