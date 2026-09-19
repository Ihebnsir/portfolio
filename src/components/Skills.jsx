import './SkillsStyles.css';
import TopologyWidget from './TopologyWidget';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiC,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiTailwindcss,
  SiMysql,
  SiCisco,
  SiN8N,
} from 'react-icons/si';
import {
  FaCode,
  FaDatabase,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaLaptopCode,
  FaNetworkWired,
  FaRoute,
  FaGlobe,
  FaDiagramProject,
  FaTerminal,
  FaShieldHalved,
  FaRobot,
  FaServer,
  FaSitemap,
  FaPlug,
} from 'react-icons/fa6';

export const marqueeTechStack = [
  'React.js',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Python',
  'C',
  'Java',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Linux',
  'Docker Fundamentals',
  'Git',
  'GitHub',
  'Cisco Packet Tracer',
  'n8n',
  'Supabase',
];

const skillCategories = [
  {
    number: '01',
    tag: 'Foundations',
    size: 'large',
    icon: FaNetworkWired,
    title: 'Telecommunications & Networking',
    description: 'Network fundamentals and telecommunications engineering foundations.',
    skills: [
      { name: 'TCP/IP', icon: FaNetworkWired },
      { name: 'Network Architecture', icon: FaDiagramProject },
      { name: 'IP Addressing', icon: FaGlobe },
      { name: 'Subnetting', icon: FaSitemap },
      { name: 'Routing Fundamentals', icon: FaRoute },
      { name: 'CCNA Fundamentals', icon: SiCisco },
      { name: 'Cisco Packet Tracer', icon: SiCisco },
      { name: 'Telecommunications Fundamentals', icon: FaNetworkWired },
    ],
  },
  {
    number: '02',
    tag: 'Core',
    size: 'medium',
    icon: FaCode,
    title: 'Programming',
    description: 'Structured problem solving across modern scripting and systems languages.',
    skills: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: SiPython },
      { name: 'C', icon: SiC },
      { name: 'Java', icon: FaJava },
    ],
  },
  {
    number: '03',
    tag: 'UI',
    size: 'medium',
    icon: FaLaptopCode,
    title: 'Frontend Development',
    description: 'User interfaces, component architecture, and responsive web experiences.',
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'React Router', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    number: '04',
    tag: 'Systems',
    size: 'medium',
    icon: FaServer,
    title: 'Backend Development',
    description: 'Application logic, API design, and service-layer integration.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: FaPlug },
    ],
  },
  {
    number: '05',
    tag: 'Data',
    size: 'small',
    icon: FaDatabase,
    title: 'Databases',
    description: 'Data persistence and query-driven application foundations.',
    skills: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'SQL', icon: SiMysql },
    ],
  },
  {
    number: '06',
    tag: 'Tools',
    size: 'medium',
    icon: FaTerminal,
    title: 'Systems & Development Tools',
    description: 'Linux-based workflows, containers, and version-controlled delivery.',
    skills: [
      { name: 'Linux', icon: SiLinux },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
    ],
  },
  {
    number: '07',
    tag: 'Security',
    size: 'medium',
    icon: FaShieldHalved,
    title: 'Cybersecurity Foundations',
    description: 'Security awareness across networks, systems, and web-facing services.',
    skills: [
      { name: 'Network Security', icon: FaShieldHalved },
      { name: 'Linux Security', icon: SiLinux },
      { name: 'Web Security', icon: FaShieldHalved },
      { name: 'CTF', icon: FaShieldHalved },
    ],
  },
  {
    number: '08',
    tag: 'Automation',
    size: 'medium',
    icon: FaRobot,
    title: 'AI & Automation',
    description: 'Workflow orchestration, agent-assisted operations, and API automation.',
    skills: [
      { name: 'n8n', icon: SiN8N },
      { name: 'AI Agents', icon: FaRobot },
      { name: 'Webhooks', icon: FaPlug },
      { name: 'API Integration', icon: FaPlug },
      { name: 'Workflow Automation', icon: FaRobot },
    ],
  },
];

function SkillBadge({ name, icon: Icon }) {
  return (
    <div className="skill-item" aria-label={name}>
      <span className="skill-item-icon" aria-hidden="true">
        <Icon />
      </span>
      <span>{name}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-grid-bg" aria-hidden="true" />
      <div className="container skills-container">
        <header className="skills-header skills-reveal skills-reveal-one">
          <span className="section-eyebrow"><i />TECHNICAL PROFILE</span>
          <h2 id="skills-title">Comprehensive technical <span>profile.</span></h2>
          <p>A professional foundation across telecommunications, networking, software development, systems, and cybersecurity.</p>
        </header>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <article
                key={category.number}
                className={`skill-category skill-category--${category.size} skills-reveal skills-reveal-${index + 2}`}
              >
                <div className="category-topbar">
                  <span className="category-number">{category.number}</span>
                  <span className="category-tag">{category.tag}</span>
                </div>

                <div className="category-heading">
                  <span className="category-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{category.title}</h3>
                </div>

                <p className="category-description">{category.description}</p>

                <div className="category-skills">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return <SkillBadge key={`${category.number}-${skill.name}`} name={skill.name} icon={SkillIcon} />;
                  })}
                </div>

                <span className="category-bg-number" aria-hidden="true">{category.number}</span>
              </article>
            );
          })}
        </div>

        <div className="skills-widget-row">
          <TopologyWidget />
        </div>
      </div>
    </section>
  );
}

export default Skills;
