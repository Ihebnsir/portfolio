function EngineerCard() {
  return (
    <aside className="engineer-card" aria-label="Professional identity">
      <span className="engineer-card-mark" aria-hidden="true">+</span>
      <div>
        <p>{'// ENGINEER'}</p>
        <p>{'// DEVELOPER'}</p>
        <p>{'// LEARNER'}</p>
        <p className="engineer-accent">{'// ALWAYS BUILDING'}</p>
      </div>
    </aside>
  );
}

export default EngineerCard;
