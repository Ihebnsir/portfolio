import './SkillsStyles.css';

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
  'Supabase'
];

const skillCategories = [
  {
    number: '01',
    title: 'Telecommunications & Networking',
    skills: ['TCP/IP', 'Network Architecture', 'IP Addressing', 'Subnetting', 'Routing Fundamentals', 'CCNA Fundamentals', 'Cisco Packet Tracer', 'Telecommunications Fundamentals']
  },
  {
    number: '02',
    title: 'Programming',
    skills: ['JavaScript', 'Python', 'C', 'Java']
  },
  {
    number: '03',
    title: 'Frontend Development',
    skills: ['React.js', 'React Router', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    number: '04',
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    number: '05',
    title: 'Databases',
    skills: ['MongoDB', 'SQL']
  },
  {
    number: '06',
    title: 'Systems & Development Tools',
    skills: ['Linux', 'Linux CLI', 'Docker Fundamentals', 'Git', 'GitHub']
  },
  {
    number: '07',
    title: 'Cybersecurity Foundations',
    skills: ['Cybersecurity Fundamentals', 'Network Security Fundamentals', 'Linux Security Fundamentals', 'Web Security Fundamentals', 'CTF / Capture The Flag']
  },
  {
    number: '08',
    title: 'AI & Automation',
    skills: ['n8n', 'AI Agents', 'Webhooks', 'API Integration', 'Workflow Automation']
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-grid-bg" aria-hidden="true" />
      <div className="container skills-container">
        <header className="skills-header skills-reveal skills-reveal-one">
          <span className="section-eyebrow"><i />03 / Technical Skills</span>
          <h2 id="skills-title">Comprehensive technical <span>profile.</span></h2>
          <p>A professional foundation across telecommunications, networking, software development, systems, and cybersecurity.</p>
        </header>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <article key={category.number} className={`skill-category skills-reveal skills-reveal-${index + 2}`}>
              <div className="category-header">
                <span className="category-number">{category.number}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="category-skills">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-highlight skills-reveal skills-reveal-nine">
          <div className="highlight-box">
            <span className="highlight-label">Full-Stack Foundation</span>
            <p>SkillBridge demonstrates proficiency across React, Node.js, Express, MongoDB, authentication, real-time communication, and modern deployment practices.</p>
          </div>
          <div className="highlight-box">
            <span className="highlight-label">Engineering Focus</span>
            <p>Telecommunications engineering background combined with hands-on networking fundamentals, CCNA preparation, and systems-level understanding.</p>
          </div>
          <div className="highlight-box">
            <span className="highlight-label">Security Consciousness</span>
            <p>Building foundations in cybersecurity with CTF participation, network security concepts, and security-aware application development.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
