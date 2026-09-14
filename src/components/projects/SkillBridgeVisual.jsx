function SkillBridgeVisual() {
  return (
    <div className="skillbridge-visual" aria-label="SkillBridge platform dashboard visual mockup" role="img">
      <div className="skillbridge-visual-grid" aria-hidden="true" />
      <div className="skillbridge-visual-topbar">
        <span className="visual-window-dots" aria-hidden="true"><i /><i /><i /></span>
        <span>skillbridge / dashboard</span>
        <span className="visual-live"><i /> live</span>
      </div>
      <div className="skillbridge-visual-body">
        <aside className="visual-sidebar" aria-hidden="true">
          <span className="visual-logo">SB</span>
          <i className="visual-sidebar-active" /><i /><i /><i /><i />
        </aside>
        <div className="visual-dashboard">
          <div className="visual-dashboard-header"><span>Learner workspace</span><b>ROLE / LEARNER</b></div>
          <div className="visual-capabilities">
            <div><span>Authentication</span><strong>JWT + RBAC</strong></div>
            <div><span>Real-Time</span><strong>Socket.IO</strong></div>
            <div><span>Storage</span><strong>Supabase</strong></div>
            <div><span>Automation</span><strong>n8n + AI</strong></div>
          </div>
          <div className="visual-content-row">
            <div className="visual-chart"><span>Learning progress</span><div className="chart-lines" aria-hidden="true"><i /><i /><i /><i /><i /></div></div>
            <div className="visual-activity"><span>Training workflow</span><strong>Program reservation</strong><small>Training center / status</small><em>Reservation flow</em></div>
          </div>
        </div>
      </div>
      <div className="skillbridge-visual-labels" aria-hidden="true"><span>LEARNERS</span><span>TRAINING CENTERS</span><span>ADMINISTRATION</span></div>
    </div>
  );
}

export default SkillBridgeVisual;
