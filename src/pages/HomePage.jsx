import { FaGithub } from 'react-icons/fa6';
import About from '../components/About';
import Certifications from '../components/certifications/Certifications';
import Hero from '../components/Hero';
import Projects from '../components/projects/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import TechStackMarquee from '../components/TechStackMarquee';
import { profile } from '../data/profile';

const buildSteps = [
  {
    number: '01',
    title: 'Understand the system',
    text: 'Start by mapping the technical context, constraints, and real-world behavior of the problem before writing code.'
  },
  {
    number: '02',
    title: 'Design for clarity',
    text: 'Structure the architecture around maintainability, resilience, and the simplest path to a working solution.'
  },
  {
    number: '03',
    title: 'Prototype quickly',
    text: 'Translate ideas into working loops, validate assumptions early, and refine the flow based on real feedback.'
  },
  {
    number: '04',
    title: 'Build with intent',
    text: 'Implement features with attention to usability, system performance, data flow, and deployment readiness.'
  },
  {
    number: '05',
    title: 'Test and iterate',
    text: 'Verify behavior, fix weak points, and improve reliability before moving to the next milestone.'
  },
  {
    number: '06',
    title: 'Document the learning',
    text: 'Capture trade-offs, technical decisions, and lessons to create a stronger foundation for future work.'
  }
];

const explorationAreas = [
  {
    title: 'Cybersecurity',
    description: 'Deepening my understanding of secure systems, network defense principles, and practical security workflows.'
  },
  {
    title: 'AI & Automation',
    description: 'Exploring how intelligent workflows, automation, and agent-based tooling can support technical operations.'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Building a stronger foundation in deployment workflows, infrastructure thinking, and software delivery practices.'
  }
];

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechStackMarquee />
      <Skills />
      <Projects />

      <section id="how-i-build" className="build-section" aria-labelledby="build-title">
        <div className="container build-container">
          <header className="build-header build-reveal build-reveal-one">
            <span className="section-eyebrow"><i />05 / How I Build</span>
            <h2 id="build-title">A practical engineering approach.</h2>
            <p>I work best when I combine systems thinking, iterative prototyping, and a clear technical foundation.</p>
          </header>

          <div className="build-grid">
            {buildSteps.map((step) => (
              <article key={step.number} className="build-card build-reveal build-reveal-two">
                <span className="build-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Experience />

      <section id="exploring" className="exploring-section" aria-labelledby="exploring-title">
        <div className="container exploring-container">
          <header className="exploring-header exploring-reveal exploring-reveal-one">
            <span className="section-eyebrow"><i />06 / Currently Exploring</span>
            <h2 id="exploring-title">Focused on the next layer of <span>technical depth.</span></h2>
          </header>

          <div className="exploring-grid">
            {explorationAreas.map((area, index) => (
              <article key={area.title} className={`exploring-card exploring-reveal exploring-reveal-${index + 2}`}>
                <span className="exploring-tag">{area.title}</span>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Certifications />

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="contact-glow" aria-hidden="true" />
        <div className="container contact-container">
          <header className="contact-header">
            <span className="section-eyebrow"><i />07 / Contact</span>
            <h2 id="contact-title">Let&apos;s connect.</h2>
            <p>I&apos;m open to conversations around engineering work, full-stack development, telecommunications systems, networking, and practical technology projects.</p>
          </header>

          <div className="contact-actions">
            <a className="button button-primary" href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile">LinkedIn <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href={profile.social.github} target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
