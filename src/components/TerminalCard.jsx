function TerminalCard({ className = '' }) {
  return (
    <aside className={`terminal-card ${className}`.trim()} aria-label="Technology stack">
      <div className="terminal-bar">
        <span className="terminal-lights" aria-hidden="true"><i /><i /><i /></span>
        <span>iheb@portfolio:~</span>
        <span className="terminal-lock" aria-hidden="true">•••</span>
      </div>
      <div className="terminal-body">
        <p><span className="terminal-prompt">$</span> whoami</p>
        <p className="terminal-output">2nd-Year Telecommunications Engineering Student<br />Full-Stack Developer</p>
        <p className="terminal-gap"><span className="terminal-prompt">$</span> stack</p>
        <div className="stack-list" aria-label="Technology stack list">
          <span>Networking</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Linux</span>
          <span>Cybersecurity</span>
          <span>n8n</span>
        </div>
        <p className="terminal-build">&gt; Building practical solutions at the intersection of networks and software...</p>
        <span className="terminal-cursor" aria-hidden="true" />
      </div>
    </aside>
  );
}

export default TerminalCard;
