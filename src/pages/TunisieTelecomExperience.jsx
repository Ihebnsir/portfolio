import { Link } from 'react-router-dom';
import tunisieTelecomExperience from '../components/experiences/experiencesData';
import './tunisieTelecomExperienceStyles.css';

function TunisieTelecomExperience() {
  const exp = tunisieTelecomExperience;

  return (
    <div className="experience-page">
      <div className="experience-page-nav experience-page-nav-top">
        <Link to="/#experience" className="experience-nav-link">← Back to experience</Link>
      </div>

      {/* HERO SECTION */}
      <section className="experience-page-hero">
        <div className="container">
          <div className="experience-hero-content">
            <div className="experience-hero-kicker">
              <span className="experience-type-large">
                <i />
                INTERNSHIP
              </span>
            </div>
            <h1 className="experience-hero-title">Telecommunications Engineering Internship</h1>
            <p className="experience-hero-organization">Tunisie Télécom — Regional Directorate, Sfax</p>
            <p className="experience-hero-date">July 2026</p>
            <p className="experience-hero-description">
              {exp.description}
            </p>
            <p className="experience-hero-detailed">
              {exp.detailedOverview}
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="experience-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Internship Overview</span>
            <h2>Professional Context</h2>
          </div>
          <div className="overview-grid">
            <div className="overview-card">
              <h3>Organization</h3>
              <p>{exp.organization}</p>
              <p className="overview-detail">Regional Directorate, Sfax, Tunisia</p>
            </div>
            <div className="overview-card">
              <h3>Duration</h3>
              <p>{exp.date}</p>
              <p className="overview-detail">{exp.period}</p>
            </div>
            <div className="overview-card">
              <h3>Focus Areas</h3>
              <p>{exp.category}</p>
              <p className="overview-detail">Access Network • Maintenance • IP-MSAN</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESS NETWORK ARCHITECTURE */}
      <section className="experience-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">01 / Technical Foundation</span>
            <h2>Access Network Architecture</h2>
          </div>
          <p className="section-intro">{exp.accessNetworkArchitecture.description}</p>
          
          {/* Hierarchy Diagram */}
          <div className="architecture-diagram">
            <div className="arch-hierarchy">
              {exp.accessNetworkArchitecture.hierarchy.map((item, idx) => (
                <div key={idx} className="arch-level">
                  <div className="arch-box">
                    <div className="arch-level-name">{item.level}</div>
                    <div className="arch-level-full">{item.fullName}</div>
                    <div className="arch-level-desc">{item.description}</div>
                  </div>
                  {idx < exp.accessNetworkArchitecture.hierarchy.length - 1 && (
                    <div className="arch-arrow">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cable Types */}
          <div className="cable-types-grid">
            {exp.accessNetworkArchitecture.cableTypes.map((cable, idx) => (
              <div key={idx} className="cable-card">
                <h4>{cable.type}</h4>
                <p>{cable.description}</p>
              </div>
            ))}
          </div>

          {/* Key Points */}
          <div className="key-points">
            <h4>Key Infrastructure Elements</h4>
            <div className="points-list">
              {exp.accessNetworkArchitecture.keyPoints.map((point, idx) => (
                <div key={idx} className="point-item">
                  <span className="point-dot" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK MAINTENANCE */}
      <section className="experience-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">02 / Field Experience</span>
            <h2>Network Maintenance & Troubleshooting</h2>
          </div>
          <p className="section-intro">{exp.networkMaintenance.description}</p>

          {/* Workflow Diagram */}
          <div className="workflow-diagram">
            <h4 className="workflow-title">Fault Resolution Workflow</h4>
            <div className="workflow-steps">
              {exp.networkMaintenance.workflow.map((step, idx) => (
                <div key={idx} className="workflow-step">
                  <div className="step-box">{step}</div>
                  {idx < exp.networkMaintenance.workflow.length - 1 && (
                    <div className="step-arrow">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Procedures */}
          <div className="procedures-grid">
            {exp.networkMaintenance.procedures.map((proc, idx) => (
              <div key={idx} className="procedure-card">
                <h4>{proc.name}</h4>
                <p>{proc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL EQUIPMENT */}
      <section className="experience-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">03 / Tools & Equipment</span>
            <h2>{exp.technicalEquipment.title}</h2>
          </div>
          <p className="section-intro">{exp.technicalEquipment.description}</p>

          <div className="equipment-grid">
            {exp.technicalEquipment.equipment.map((item, idx) => (
              <div key={idx} className="equipment-card">
                <div className="equipment-icon">⚙️</div>
                <h4>{item.name}</h4>
                <p className="equipment-category">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP-MSAN SECTION */}
      <section className="experience-page-section ip-msan-featured">
        <div className="container">
          <div className="section-header">
            <span className="section-label">04 / Network Modernization</span>
            <h2>IP-MSAN & Access Network Evolution</h2>
          </div>
          <p className="section-intro">{exp.ipMsan.description}</p>

          {/* IP-MSAN Architecture */}
          <div className="ip-msan-architecture">
            <h4 className="arch-title">Modern Access Architecture</h4>
            <div className="msan-flow">
              {exp.ipMsan.architecture.map((level, idx) => (
                <div key={idx} className="msan-level">
                  <div className="msan-box">{level}</div>
                  {idx < exp.ipMsan.architecture.length - 1 && (
                    <div className="msan-arrow">↓</div>
                  )}
                </div>
              ))}
            </div>
            <p className="msan-note">
              <span className="note-label">Role:</span> {exp.ipMsan.role}
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="capabilities-grid">
            {exp.ipMsan.keyCapabilities.map((capability, idx) => (
              <div key={idx} className="capability-item">
                <span className="capability-dot" />
                {capability}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP-MSAN COMPONENTS */}
      <section className="experience-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">05 / System Architecture</span>
            <h2>{exp.ipMsanComponents.title}</h2>
          </div>
          <p className="section-intro">{exp.ipMsanComponents.description}</p>

          <div className="components-grid">
            {exp.ipMsanComponents.components.map((comp, idx) => (
              <div key={idx} className="component-card">
                <div className="component-header">
                  <span className="component-number">{String(idx + 1).padStart(2, '0')}</span>
                  <h4>{comp.name}</h4>
                </div>
                <p>{comp.description}</p>
              </div>
            ))}
          </div>

          <div className="components-note">
            <p>{exp.ipMsanComponents.note}</p>
          </div>
        </div>
      </section>

      {/* NOKIA SIEMENS NETWORKS */}
      <section className="experience-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">06 / Vendor Exposure</span>
            <h2>{exp.nokiaSiemensNetworks.title}</h2>
          </div>
          <div className="vendor-card">
            <p className="vendor-description">{exp.nokiaSiemensNetworks.description}</p>
            <p className="vendor-exposure">{exp.nokiaSiemensNetworks.exposure}</p>
          </div>
        </div>
      </section>

      {/* TELECOMMUNICATIONS KNOWLEDGE */}
      <section className="experience-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">07 / Knowledge Area</span>
            <h2>{exp.telecomKnowledge.title}</h2>
          </div>
          <div className="keywords-grid">
            {exp.telecomKnowledge.keywords.map((keyword, idx) => (
              <div key={idx} className="keyword-badge">{keyword}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING SKILLS */}
      <section className="experience-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">08 / Professional Development</span>
            <h2>{exp.engineeringSkillsDeveloped.title}</h2>
          </div>
          <div className="skills-acquired-grid">
            {exp.engineeringSkillsDeveloped.skills.map((skill, idx) => (
              <div key={idx} className="skill-acquired-item">
                <span className="skill-checkmark">✓</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNIFICANCE */}
      <section className="experience-page-section significance-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why This Matters</span>
            <h2>{exp.significance.title}</h2>
          </div>
          <p className="significance-description">{exp.significance.description}</p>

          <div className="significance-areas">
            {exp.significance.areas.map((item, idx) => (
              <div key={idx} className="significance-card">
                <div className="sig-icon">{item.icon}</div>
                <p>{item.area}</p>
              </div>
            ))}
          </div>

          <div className="significance-integration">
            <p>{exp.significance.integration}</p>
          </div>
        </div>
      </section>

      {/* INTERNSHIP DOCUMENTATION */}
      <section className="experience-page-section documentation-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">09 / Official Record</span>
            <h2>Internship Documentation</h2>
          </div>
          <p className="section-intro">Technical internship report covering the telecommunications access network, maintenance and troubleshooting procedures, and IP-MSAN technology studied during my internship at Tunisie Télécom — Sfax.</p>

          <div className="documentation-card">
            <div className="doc-card-header">
              <div className="doc-icon">📄</div>
              <div className="doc-info">
                <h3>Technical Internship Report</h3>
                <p className="doc-meta">Telecommunications Engineering Internship</p>
              </div>
            </div>

            <div className="doc-details">
              <div className="doc-detail-item">
                <span className="doc-detail-label">Organization:</span>
                <span className="doc-detail-value">Tunisie Télécom</span>
              </div>
              <div className="doc-detail-item">
                <span className="doc-detail-label">Location:</span>
                <span className="doc-detail-value">Sfax, Tunisia</span>
              </div>
              <div className="doc-detail-item">
                <span className="doc-detail-label">Period:</span>
                <span className="doc-detail-value">July 2026</span>
              </div>
            </div>

            <p className="doc-description">
              Complete technical documentation of access network architecture, field maintenance procedures, fault diagnosis workflows, and IP-MSAN technology integration studied during the internship.
            </p>

            <a 
              href="/documents/tunisie-telecom-internship-report.pdf.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="doc-link"
              aria-label="View full internship report PDF"
            >
              <span>VIEW FULL REPORT</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <div className="experience-page-nav experience-page-nav-bottom">
        <Link to="/#experience" className="experience-nav-link">← Back to experience</Link>
      </div>
    </div>
  );
}

export default TunisieTelecomExperience;
