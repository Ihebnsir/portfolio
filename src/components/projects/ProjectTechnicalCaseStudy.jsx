function ProjectTechnicalCaseStudy({ project }) {
  return (
    <div className="project-technical-case-study">
      <div className="project-case-study-heading"><span className="project-detail-label">Engineering dossier / SkillBridge</span><span className="project-status"><i />{project.status}</span></div>
      <div className="project-case-grid">
        <section className="project-case-panel project-what-built"><span className="project-detail-label">What I built</span><div className="what-built-grid">{project.highlights.slice(0, 6).map((item) => <article key={item.number}><b>{item.number}</b><h4>{item.title}</h4><p>{item.text}</p></article>)}</div></section>
        <section className="project-case-panel project-stack-panel"><span className="project-detail-label">Technical stack</span><div className="stack-groups">{project.stackGroups.map((group) => <div key={group.label}><strong>{group.label}</strong><span>{group.items.join(' · ')}</span></div>)}</div></section>
      </div>
      <section className="project-architecture-wide project-case-panel"><div><span className="project-detail-label">System architecture</span><p>Three dedicated platform experiences flow through the frontend and service layers into the backend and data store.</p></div><div className="architecture-wide-flow"><strong>Learner<br /><small>Training Center</small><br />Admin</strong><i>↓</i><strong>React Frontend<br /><small>Router / Tailwind</small></strong><i>↓</i><strong>REST API<br /><small>Socket.IO</small></strong><i>↓</i><strong>Node.js + Express<br /><small>MongoDB</small></strong></div><div className="architecture-wide-services"><span>Supabase Storage</span><span>Nodemailer</span><span>n8n / AI Agent</span><span>Netlify</span><span>Render</span></div></section>
      <div className="project-case-grid project-case-grid-three">
        <section className="project-case-panel"><span className="project-detail-label">Security &amp; authentication</span><p className="case-lead">Protecting access across three role-specific environments.</p><ul className="case-list">{project.securityPoints.map((point) => <li key={point}><i />{point}</li>)}</ul></section>
        <section className="project-case-panel"><span className="project-detail-label">Backend engineering</span><p className="case-lead">The API layer coordinates the platform&apos;s core operational domains.</p><div className="case-chip-list">{project.backendResponsibilities.map((item) => <span key={item}>{item}</span>)}</div></section>
        <section className="project-case-panel project-ai-panel"><span className="project-detail-label">AI &amp; automation</span><div className="case-flow"><strong>SkillBridge</strong><i>↓</i><strong>Webhook / API</strong><i>↓</i><strong>n8n Workflow</strong><i>↓</i><strong>AI Agent</strong><i>↓</i><strong>Application response</strong></div><p>AI-assisted support helps users answer questions, find relevant information, navigate platform functionality, and automate selected interactions.</p></section>
      </div>
      <div className="project-case-grid project-case-grid-two">
        <section className="project-case-panel"><span className="project-detail-label">Real-time communication</span><p className="case-lead">Socket.IO is used to support responsive messaging and notification mechanisms without relying entirely on traditional page refreshes.</p><div className="case-flow-inline"><strong>Socket.IO</strong><i>→</i><strong>Real-Time Events</strong><i>→</i><strong>Messaging</strong><i>→</i><strong>Notifications</strong></div></section>
        <section className="project-case-panel"><span className="project-detail-label">Secure file storage</span><p className="case-lead">Private Supabase Storage supports secure file management with controlled access to stored resources.</p><div className="case-chip-list"><span>Private bucket</span><span>File upload</span><span>Secure access</span><span>Document management</span><span>Certificate files</span></div></section>
      </div>
      <section className="project-deployment-panel project-case-panel"><span className="project-detail-label">Deployment &amp; development</span><div className="deployment-grid">{project.deployment.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div></section>
      <section className="project-skills-panel project-case-panel"><span className="project-detail-label">Engineering skills demonstrated</span><div className="engineering-skill-grid">{project.engineeringSkills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>
    </div>
  );
}

export default ProjectTechnicalCaseStudy;
