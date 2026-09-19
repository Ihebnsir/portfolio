import RoleBadges from './RoleBadges';
import TerminalCard from './TerminalCard';

const highlights = [
  { index: '01', label: 'Telecommunications', value: 'Engineering' },
  { index: '02', label: 'Full-Stack', value: 'Development' },
  { index: '03', label: 'Networking', value: 'Infrastructure' },
  { index: '04', label: 'Cybersecurity', value: 'Future Path' },
];

function AboutNetwork() {
  return (
    <svg className="about-network" viewBox="0 0 560 360" aria-hidden="true">
      <defs>
        <linearGradient id="aboutNetworkLine" x1="0" x2="1">
          <stop offset="0" stopColor="#00e5ff" stopOpacity="0.08" />
          <stop offset="0.5" stopColor="#8b5cf6" stopOpacity="0.58" />
          <stop offset="1" stopColor="#00e5ff" stopOpacity="0.08" />
        </linearGradient>
        <radialGradient id="aboutNetworkGlow">
          <stop offset="0" stopColor="#00e5ff" stopOpacity="0.28" />
          <stop offset="1" stopColor="#00e5ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle className="about-network-orbit orbit-a" cx="386" cy="188" r="142" />
      <circle className="about-network-orbit orbit-b" cx="386" cy="188" r="92" />
      <circle className="about-network-glow" cx="386" cy="188" r="120" fill="url(#aboutNetworkGlow)" />
      <g className="about-network-links" stroke="url(#aboutNetworkLine)">
        <line x1="386" y1="188" x2="248" y2="82" />
        <line x1="386" y1="188" x2="510" y2="86" />
        <line x1="386" y1="188" x2="492" y2="286" />
        <line x1="386" y1="188" x2="252" y2="294" />
        <line x1="248" y1="82" x2="510" y2="86" />
        <line x1="252" y1="294" x2="492" y2="286" />
      </g>
      <g className="about-network-nodes">
        <circle cx="386" cy="188" r="7" className="about-node-core" />
        <circle cx="248" cy="82" r="4" />
        <circle cx="510" cy="86" r="4" />
        <circle cx="492" cy="286" r="4" />
        <circle cx="252" cy="294" r="4" />
      </g>
    </svg>
  );
}

function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-grid" aria-hidden="true" />
      <div className="container about-container">
        <header className="about-header about-reveal about-reveal-one">
          <span className="section-eyebrow"><i />01 / About</span>
          <h2 id="about-title">Building at the intersection of <span>networks</span> and software.</h2>
          <p>Learning how reliable systems connect people, data, and ideas through thoughtful engineering.</p>
        </header>

        <div className="about-main-grid">
          <article className="about-story about-reveal about-reveal-two">
            <span className="about-index">01 — THE PERSON BEHIND THE BUILD</span>
            <h3>Who I am</h3>
            <p>I am a 2nd-year Telecommunications Engineering student and full-stack developer interested in building reliable digital systems, understanding how networks communicate, and developing modern web applications.</p>
            <p className="about-story-note">I&apos;m continuously learning through practical projects, with a growing focus on distributed systems, Linux, networking, and the foundations of cybersecurity alongside modern software development practices.</p>
          </article>

          <div className="profile-stage about-reveal about-reveal-three">
            <AboutNetwork />
            <div className="profile-panel">
              <div className="profile-panel-header">
                <span><i className="status-dot" />Profile / System</span>
                <span className="profile-code">SYS.01</span>
              </div>
              <dl className="profile-list">
                <div><dt>Role</dt><dd>2nd-Year Telecommunications Engineering Student</dd></div>
                <div><dt>Focus</dt><dd>Full-Stack Development & Networking</dd></div>
                <div><dt>Interests</dt><dd><span>Networking</span><span>Linux</span><span>Cybersecurity</span><span>Software Engineering</span><span>AI & Automation</span></dd></div>
                <div><dt>Status</dt><dd className="profile-status">Currently Learning / Building</dd></div>
              </dl>
            </div>
          </div>
        </div>

        <div className="about-lower-grid">
          <div className="about-focus-stack">
            <RoleBadges />
            <div className="about-highlights" aria-label="Professional focus areas">
              {highlights.map((highlight, index) => (
                <div className={`highlight-item about-reveal about-reveal-${index + 2}`} key={highlight.index}>
                  <span className="highlight-index">{highlight.index}</span>
                  <span className="highlight-label">{highlight.label}</span>
                  <strong>{highlight.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="about-terminal-wrap">
            <TerminalCard className="terminal-card--about" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
