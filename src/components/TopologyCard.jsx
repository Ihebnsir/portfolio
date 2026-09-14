function TopologyCard() {
  return (
    <aside className="topology-card" aria-label="Live network topology status">
      <div className="topology-card-heading">
        <span className="status-dot" aria-hidden="true" />
        <span>Live topology</span>
        <strong>NET / 01</strong>
      </div>
      <svg className="topology-mini-map" viewBox="0 0 150 42" aria-hidden="true">
        <path d="M8 26 L40 10 L76 29 L108 9 L142 23" />
        <path d="M40 10 L76 29 M76 29 L108 9" />
        <circle cx="8" cy="26" r="3" />
        <circle cx="40" cy="10" r="3" />
        <circle cx="76" cy="29" r="3" />
        <circle cx="108" cy="9" r="3" />
        <circle cx="142" cy="23" r="3" />
      </svg>
      <div className="topology-card-footer"><span>Signal stable</span><span>06 nodes</span></div>
    </aside>
  );
}

export default TopologyCard;
