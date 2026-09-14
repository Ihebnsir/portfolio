import { Link } from 'react-router-dom';
import skillBridgeProject from '../components/projects/projectsData';
import './skillbridgeProjectStyles.css';

function SkillBridgeProject() {
  return (
    <div className="project-page">
      <div className="project-page-nav project-page-nav-top">
        <Link to="/#projects" className="project-nav-link">← Back to projects</Link>
      </div>

      {/* HERO SECTION */}
      <section className="project-page-hero">
        <div className="container">
          <div className="project-hero-content">
            <div className="project-hero-kicker">
              <span className="project-status-large">
                <i />
                {skillBridgeProject.status}
              </span>
            </div>
            <h1 className="project-hero-title">SkillBridge</h1>
            <p className="project-hero-subtitle">Full-Stack E-Learning & Training Platform</p>
            <p className="project-hero-description">
              SkillBridge is a Full-Stack web platform currently under development that connects learners with training centers in Tunisia through a centralized digital learning and training ecosystem.
            </p>
            <p className="project-hero-description">
              The platform combines training discovery, reservations, learner progress tracking, attendance management, real-time communication, notifications, certificate generation, secure authentication and administrative management in a single application.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Project Overview</span>
            <h2>Three Distinct User Environments</h2>
          </div>
          <div className="roles-grid">
            <div className="role-card">
              <h3>Learner</h3>
              <ul className="role-list">
                <li>Discover training programs</li>
                <li>Reserve formations</li>
                <li>Track progress</li>
                <li>Manage attendance</li>
                <li>Receive notifications</li>
                <li>Real-time messaging</li>
                <li>Access certificates</li>
              </ul>
            </div>
            <div className="role-card">
              <h3>Training Center</h3>
              <ul className="role-list">
                <li>Manage center profile</li>
                <li>Publish training programs</li>
                <li>Manage learners</li>
                <li>Handle reservations</li>
                <li>Track attendance</li>
                <li>Communication hub</li>
                <li>Send notifications</li>
              </ul>
            </div>
            <div className="role-card">
              <h3>Administrator</h3>
              <ul className="role-list">
                <li>User management</li>
                <li>Center management</li>
                <li>Content moderation</li>
                <li>Dispute resolution</li>
                <li>System notifications</li>
                <li>Platform administration</li>
                <li>Analytics & monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="project-page-section problem-solution">
        <div className="container">
          <div className="problem-solution-grid">
            <div className="problem-box">
              <span className="section-label">The Problem</span>
              <h3>Fragmented Training Ecosystem</h3>
              <p>
                Training discovery and management across multiple platforms creates friction. Learners face challenges discovering suitable programs, managing registrations and reservations across different channels. Training centers struggle with scattered communication, manual registration processes, attendance tracking and learner progress monitoring. Administrative oversight is difficult without centralized data.
              </p>
            </div>
            <div className="solution-box">
              <span className="section-label">The Solution</span>
              <h3>Unified Digital Platform</h3>
              <p>
                SkillBridge centralizes all training workflows into a single, secure platform. Learners discover and reserve training in one place. Training centers publish programs and manage learners through a dedicated interface. Administrators oversee the entire ecosystem with real-time visibility. One login. One place. One ecosystem connecting learners, training centers and platform administrators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Features</span>
            <h2>Platform Capabilities</h2>
          </div>
          <div className="features-grid">
            {skillBridgeProject.highlights.map((feature) => (
              <div key={feature.number} className="feature-card">
                <div className="feature-number">{feature.number}</div>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL STACK */}
      <section className="project-page-section tech-stack-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Technical Stack</span>
            <h2>Architecture & Technologies</h2>
          </div>
          <div className="tech-stack-grid">
            {skillBridgeProject.stackGroups.map((group) => (
              <div key={group.label} className="tech-group">
                <h4>{group.label}</h4>
                <div className="tech-items">
                  {group.items.map((item) => (
                    <span key={item} className="tech-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGINEERING SKILLS */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Engineering Skills</span>
            <h2>Demonstrated Technical Expertise</h2>
          </div>
          <div className="skills-grid">
            {skillBridgeProject.engineeringSkills.map((skill) => (
              <div key={skill} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">System Architecture</span>
            <h2>Application Flow & Infrastructure</h2>
          </div>
          <div className="architecture-box">
            <div className="architecture-flow">
              <div className="arch-layer">
                <div className="arch-label">Users</div>
                <div className="arch-items">
                  <span>Learner</span>
                  <span>Training Center</span>
                  <span>Admin</span>
                </div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer">
                <div className="arch-label">Frontend</div>
                <div className="arch-items">
                  <span>React.js</span>
                  <span>React Router</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer">
                <div className="arch-label">Communication</div>
                <div className="arch-items">
                  <span>REST API</span>
                  <span>Socket.IO</span>
                </div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer">
                <div className="arch-label">Backend</div>
                <div className="arch-items">
                  <span>Node.js</span>
                  <span>Express.js</span>
                </div>
              </div>
              <div className="arch-arrow">↓</div>
              <div className="arch-layer">
                <div className="arch-label">Database</div>
                <div className="arch-items">
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
            <div className="architecture-services">
              <div className="service-section">
                <h4>External Services</h4>
                <div className="services-list">
                  <span>Supabase Storage</span>
                  <span>Nodemailer</span>
                  <span>n8n Workflows</span>
                  <span>AI Agent</span>
                  <span>Webhooks</span>
                </div>
              </div>
              <div className="service-section">
                <h4>Deployment</h4>
                <div className="services-list">
                  <span>Frontend → Netlify</span>
                  <span>Backend → Render</span>
                  <span>Version Control → Git/GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRONTEND ARCHITECTURE */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Frontend Engineering</span>
            <h2>React Application Architecture</h2>
          </div>
          <div className="content-box">
            <p className="section-intro">
              The frontend uses React to build a responsive, component-driven user interface that adapts to the needs of three distinct user roles: learners, training centers, and administrators.
            </p>
            <div className="features-bullet-grid">
              <div className="bullet-item">
                <h4>React Component Architecture</h4>
                <p>Modular, reusable components for training cards, user forms, real-time messaging interfaces and role-specific dashboards.</p>
              </div>
              <div className="bullet-item">
                <h4>React Router</h4>
                <p>Client-side routing for seamless navigation between training discovery, reservations, progress tracking and user-specific sections.</p>
              </div>
              <div className="bullet-item">
                <h4>Protected Routes</h4>
                <p>Role-aware route guards ensure learners, training centers and administrators see only their authorized interfaces and data.</p>
              </div>
              <div className="bullet-item">
                <h4>Responsive UI with Tailwind CSS</h4>
                <p>Mobile-first design ensuring the platform works seamlessly on phones, tablets and desktops.</p>
              </div>
              <div className="bullet-item">
                <h4>State Management</h4>
                <p>Efficient API communication and component state handling for real-time updates and notifications.</p>
              </div>
              <div className="bullet-item">
                <h4>Real-Time UI Updates</h4>
                <p>Socket.IO integration for live messaging, notifications and attendance updates without page refreshes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACKEND ENGINEERING */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Backend Engineering</span>
            <h2>Node.js & Express REST API</h2>
          </div>
          <div className="content-box">
            <p className="section-intro">
              The backend is built with Node.js and Express, handling authentication, authorization, user management, training operations, reservations, notifications and real-time communication.
            </p>
            <div className="api-endpoints">
              <div className="endpoint-category">
                <h4>Authentication & Users</h4>
                <div className="endpoint-list">
                  <span>User registration & login</span>
                  <span>JWT token management</span>
                  <span>Password recovery</span>
                  <span>Role assignment</span>
                </div>
              </div>
              <div className="endpoint-category">
                <h4>Training Management</h4>
                <div className="endpoint-list">
                  <span>Training program CRUD</span>
                  <span>Program filtering & search</span>
                  <span>Program details</span>
                  <span>Session management</span>
                </div>
              </div>
              <div className="endpoint-category">
                <h4>Reservations & Attendance</h4>
                <div className="endpoint-list">
                  <span>Reservation creation</span>
                  <span>Reservation management</span>
                  <span>Attendance tracking</span>
                  <span>Learner progress</span>
                </div>
              </div>
              <div className="endpoint-category">
                <h4>Communication & Notifications</h4>
                <div className="endpoint-list">
                  <span>Real-time messaging</span>
                  <span>Notification management</span>
                  <span>Email notifications</span>
                  <span>Broadcast messaging</span>
                </div>
              </div>
              <div className="endpoint-category">
                <h4>Certificates & Files</h4>
                <div className="endpoint-list">
                  <span>PDF certificate generation</span>
                  <span>Certificate issuance</span>
                  <span>File upload handling</span>
                  <span>Secure file access</span>
                </div>
              </div>
              <div className="endpoint-category">
                <h4>Administrative</h4>
                <div className="endpoint-list">
                  <span>User management</span>
                  <span>Training center management</span>
                  <span>Content moderation</span>
                  <span>Analytics & reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & AUTHENTICATION */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Security & Authentication</span>
            <h2>Protecting Access & User Data</h2>
          </div>
          <div className="security-grid">
            <div className="security-card">
              <h4>JWT Authentication</h4>
              <p>Secure token-based authentication with expiration and refresh mechanisms for stateless API security.</p>
            </div>
            <div className="security-card">
              <h4>Role-Based Access Control (RBAC)</h4>
              <p>Three distinct user roles with granular permissions: Learner, Training Center, and Administrator, each with role-specific routes and data access.</p>
            </div>
            <div className="security-card">
              <h4>Protected Routes</h4>
              <p>Frontend and backend route protection ensures unauthorized users cannot access role-specific features or data.</p>
            </div>
            <div className="security-card">
              <h4>Password Recovery</h4>
              <p>Secure password reset workflow via email verification links with time-limited token expiration.</p>
            </div>
            <div className="security-card">
              <h4>Secure File Access</h4>
              <p>Private Supabase Storage with controlled file uploads and downloads, ensuring only authorized users access sensitive documents and certificates.</p>
            </div>
            <div className="security-card">
              <h4>API Protection</h4>
              <p>Backend API endpoints are protected with authentication middleware, preventing unauthorized access and data exposure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL-TIME COMMUNICATION */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Real-Time Communication</span>
            <h2>WebSocket-Based Messaging & Notifications</h2>
          </div>
          <div className="realtime-flow">
            <div className="flow-box">User Connects</div>
            <div className="flow-arrow">→</div>
            <div className="flow-box">Socket.IO Server</div>
            <div className="flow-arrow">→</div>
            <div className="flow-box">Real-Time Event</div>
            <div className="flow-arrow">→</div>
            <div className="flow-box">Message/Notification</div>
            <div className="flow-arrow">→</div>
            <div className="flow-box">Other Users Receive</div>
          </div>
          <div className="content-box" style={{ marginTop: '40px' }}>
            <p>
              Socket.IO enables persistent, bi-directional communication between the server and connected clients. The platform uses Socket.IO for real-time messaging between learners and training centers, instant notifications for reservations and attendance updates, and live dashboard updates without requiring page refreshes.
            </p>
          </div>
        </div>
      </section>

      {/* DATABASE */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Database & Data</span>
            <h2>MongoDB Data Management</h2>
          </div>
          <div className="content-box">
            <p className="section-intro">
              MongoDB is the primary database, storing all platform data including user profiles, training programs, reservations, attendance records, messages, notifications and certificates.
            </p>
            <p>
              The database supports flexible document storage for user data, training center information, learner profiles, program details, reservation records, attendance logs, conversation history, notification preferences and certificate records.
            </p>
          </div>
        </div>
      </section>

      {/* SUPABASE STORAGE */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Secure File Storage</span>
            <h2>Supabase Storage with Private Buckets</h2>
          </div>
          <div className="storage-grid">
            <div className="storage-card">
              <h4>Private Bucket Architecture</h4>
              <p>Private Supabase Storage buckets ensure files are protected and only accessible to authorized users.</p>
            </div>
            <div className="storage-card">
              <h4>File Uploads</h4>
              <p>Learners and training centers can upload training materials, documents and certificates to their respective private buckets.</p>
            </div>
            <div className="storage-card">
              <h4>Secure Access</h4>
              <p>File access is controlled through role-based permissions, ensuring learners can only access their own files and training center content.</p>
            </div>
            <div className="storage-card">
              <h4>Document Management</h4>
              <p>Centralized file management for training resources, attendance documentation, learner submissions and course materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI & AUTOMATION */}
      <section className="project-page-section ai-automation">
        <div className="container">
          <div className="section-header">
            <span className="section-label">AI & Automation</span>
            <h2>n8n Workflows & AI Integration</h2>
          </div>
          <div className="ai-flow">
            <div className="ai-flow-box">SkillBridge</div>
            <div className="ai-flow-arrow">↓</div>
            <div className="ai-flow-box">Webhook / API</div>
            <div className="ai-flow-arrow">↓</div>
            <div className="ai-flow-box">n8n Workflow</div>
            <div className="ai-flow-arrow">↓</div>
            <div className="ai-flow-box">AI Agent</div>
            <div className="ai-flow-arrow">↓</div>
            <div className="ai-flow-box">Automated Processing</div>
            <div className="ai-flow-arrow">↓</div>
            <div className="ai-flow-box">Application Action</div>
          </div>
          <div className="content-box" style={{ marginTop: '40px' }}>
            <p className="section-intro">
              n8n integration enables sophisticated automation workflows connecting SkillBridge with AI services and external systems.
            </p>
            <div className="features-bullet-grid">
              <div className="bullet-item">
                <h4>Webhook Integration</h4>
                <p>n8n receives webhooks from SkillBridge when specific events occur, triggering automated workflows.</p>
              </div>
              <div className="bullet-item">
                <h4>API Integrations</h4>
                <p>n8n connects SkillBridge to external APIs for additional processing, data enrichment and third-party service integration.</p>
              </div>
              <div className="bullet-item">
                <h4>AI Agent</h4>
                <p>AI-assisted support helps users answer questions, discover relevant information and navigate platform functionality.</p>
              </div>
              <div className="bullet-item">
                <h4>Automation</h4>
                <p>Selected workflows are automated to improve user experience and operational efficiency across the platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section className="project-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Deployment & DevOps</span>
            <h2>Production Infrastructure</h2>
          </div>
          <div className="deployment-grid">
            <div className="deployment-card">
              <div className="deploy-label">Frontend</div>
              <div className="deploy-value">Netlify</div>
              <p>Hosted React application with automatic deployments from GitHub.</p>
            </div>
            <div className="deployment-card">
              <div className="deploy-label">Backend</div>
              <div className="deploy-value">Render</div>
              <p>Node.js + Express API server with automated deployments and scaling.</p>
            </div>
            <div className="deployment-card">
              <div className="deploy-label">Version Control</div>
              <div className="deploy-value">Git / GitHub</div>
              <p>Source code management and collaboration with automated CI/CD workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DEMO & ACTIONS */}
      <section className="project-page-section project-actions-section">
        <div className="container">
          <div className="actions-box">
            <h2>Experience SkillBridge</h2>
            <p>View the platform in action with the live demo deployment.</p>
            <div className="action-buttons">
              <a href={skillBridgeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary button-large">Live Demo <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <section className="project-page-nav-bottom">
        <div className="container">
          <div className="nav-bottom-content">
            <Link to="/#projects" className="nav-bottom-link nav-back">← Back to Projects</Link>
            <div className="nav-bottom-link nav-next" style={{ opacity: 0.4, cursor: 'default' }}>Next Project →</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillBridgeProject;
