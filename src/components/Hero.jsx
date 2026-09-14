import EngineerCard from './EngineerCard';
import NetworkVisual from './NetworkVisual';
import PortraitCard from './PortraitCard';
import TerminalCard from './TerminalCard';
import TopologyCard from './TopologyCard';

const GITHUB_URL = 'GITHUB_URL';
const LINKEDIN_URL = 'LINKEDIN_URL';
const EMAIL_ADDRESS = 'EMAIL_ADDRESS';

function Hero() {
  return (
    <main id="home" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <div className="container hero-content">
        <div className="hero-copy">
          <div className="hero-kicker reveal reveal-one">
            <span className="kicker-line" />
            <span>Telecommunications Engineering <b>x</b> Software Development</span>
          </div>
          <p className="hero-greeting reveal reveal-one">Hello, I&apos;m</p>
          <h1 className="hero-title reveal reveal-two">
            <span>Iheb</span> Ncir
          </h1>
          <p className="hero-role reveal reveal-two">Creative Developer <span>/</span> Network Builder</p>
          <p className="hero-description reveal reveal-three">
            Telecommunications engineering student and full-stack developer exploring the space where resilient networks, thoughtful software, and a future in cybersecurity meet.
          </p>
          <div className="hero-actions reveal reveal-four">
            <a className="button button-primary" href="#projects">
              View projects <span aria-hidden="true">&#8594;</span>
            </a>
            <a className="button button-secondary" href="#cv" aria-label="Download CV">
              Download CV <span aria-hidden="true">&#8595;</span>
            </a>
          </div>
          <div className="hero-meta reveal reveal-five">
            <span><i className="meta-icon meta-signal" aria-hidden="true" />Networks</span>
            <span><i className="meta-icon meta-code" aria-hidden="true">&lt;/&gt;</i>Full-stack</span>
            <span><i className="meta-icon meta-shield" aria-hidden="true" />Cybersecurity path</span>
          </div>
          <div className="social-links reveal reveal-five" aria-label="Social links">
            <span className="social-label">Find me on</span>
            <a href={LINKEDIN_URL} aria-label="LinkedIn">in</a>
            <a href={GITHUB_URL} aria-label="GitHub">gh</a>
            <a href={EMAIL_ADDRESS} aria-label="Email">@</a>
          </div>
        </div>
        <div className="hero-visual-wrap reveal reveal-three">
          <NetworkVisual />
          <PortraitCard />
          <EngineerCard />
          <TopologyCard />
          <TerminalCard />
          <div className="feature-strip" aria-label="Portfolio principles">
            <div><span className="feature-icon">&#9678;</span><span>Ideas</span><b>&#8594;</b><strong>Code</strong></div>
            <div><span className="feature-icon">&#9678;</span><span>Networks</span><b>&#8594;</b><strong>Impact</strong></div>
            <div><span className="feature-icon">&#9678;</span><span>Learning</span><b>&#8594;</b><strong>Growing</strong></div>
          </div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll to explore</span>
        <span className="scroll-line" />
      </div>
    </main>
  );
}

export default Hero;
