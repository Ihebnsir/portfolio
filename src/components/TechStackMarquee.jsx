import './TechStackMarquee.css';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiC,
  SiTailwindcss,
  SiLinux,
  SiDocker,
  SiGit,
  SiGithub,
  SiMysql,
  SiCisco,
  SiN8N,
  SiSupabase,
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa6';

const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Python', icon: SiPython },
  { name: 'C', icon: SiC },
  { name: 'Java', icon: FaJava },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Linux', icon: SiLinux },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'SQL', icon: SiMysql },
  { name: 'Cisco', icon: SiCisco },
  { name: 'n8n', icon: SiN8N },
  { name: 'Supabase', icon: SiSupabase },
];

const buildRow = (items) => [...items, ...items];

function TechBadge({ tech, ariaHidden = false }) {
  const Icon = tech.icon;

  return (
    <div className="tech-item" aria-label={tech.name} aria-hidden={ariaHidden || undefined}>
      <span className="tech-item-icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="tech-item-name">{tech.name}</span>
    </div>
  );
}

function TechStackMarquee() {
  const rowOne = buildRow(technologies.slice(0, 10));
  const rowTwo = buildRow(technologies.slice(10));

  return (
    <section className="techstack-section" aria-labelledby="techstack-title">
      <div className="container techstack-container">
        <header className="techstack-header">
          <span className="section-eyebrow"><i />02 / Toolchain</span>
          <h3 id="techstack-title">Tech Stack</h3>
        </header>

        <p className="techstack-subtitle">Technologies and tools I work with</p>

        <div className="techstack-marquees" aria-label="Technology stack showcase">
          <div className="tech-row tech-row-one" aria-hidden="true">
            <div className="tech-track tech-track-right">
              {rowOne.map((tech, index) => (
                <TechBadge key={`${tech.name}-row1-${index}`} tech={tech} ariaHidden />
              ))}
            </div>
          </div>

          <div className="tech-row tech-row-two" aria-hidden="true">
            <div className="tech-track tech-track-left">
              {rowTwo.map((tech, index) => (
                <TechBadge key={`${tech.name}-row2-${index}`} tech={tech} ariaHidden />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackMarquee;
