function RoleBadges() {
  return (
    <div className="role-badges-wrap" aria-label="Professional badge stack">
      <aside className="engineer-card engineer-card--inline" aria-label="Professional identity">
        <span className="engineer-card-mark" aria-hidden="true">+</span>
        <div>
          <p>{'// ENGINEER'}</p>
          <p>{'// DEVELOPER'}</p>
          <p>{'// LEARNER'}</p>
          <p className="engineer-accent">{'// ALWAYS BUILDING'}</p>
        </div>
      </aside>

      <div className="role-chip-list" aria-label="Professional focus chips">
        <span>NETWORKS</span>
        <span>{'</> FULL-STACK'}</span>
        <span>CYBERSECURITY PATH</span>
      </div>
    </div>
  );
}

export default RoleBadges;
