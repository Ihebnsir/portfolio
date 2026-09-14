function TerminalCard() {
  return (
    <aside className="terminal-card" aria-label="Technology stack">
      <div className="terminal-bar">
        <span className="terminal-lights" aria-hidden="true"><i /><i /><i /></span>
        <span>iheb@portfolio:~</span>
        <span className="terminal-lock" aria-hidden="true">•••</span>
      </div>
      <div className="terminal-body">
        <p><span className="terminal-prompt">$</span> whoami</p>
        <p className="terminal-output">Telecommunications Engineering Student<br />Full-Stack Developer</p>
        <p className="terminal-gap"><span className="terminal-prompt">$</span> stack</p>
        <div className="stack-list" aria-label="Technology stack list">
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Networking</span>
          <span>Linux</span>
          <span>Git</span>
        </div>
        <p className="terminal-build">&gt; Building a more connected future...</p>
        <span className="terminal-cursor" aria-hidden="true" />
      </div>
    </aside>
  );
}

export default TerminalCard;
