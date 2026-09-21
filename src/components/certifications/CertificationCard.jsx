function CertificationCard({ certification, onView }) {
  const handleOpen = (event) => {
    event.preventDefault();
    onView(certification);
  };

  return (
    <article className="cert-card has-pdf">
      <a className="cert-preview" href={certification.pdfUrl} target="_blank" rel="noreferrer" aria-label={`Open ${certification.title} certificate PDF`} onClick={handleOpen}>
        <span className="cert-category">{certification.category}</span>
        <div className="cert-preview-visual" aria-hidden="true">
          <span className="cert-preview-badge">Verified</span>
          <div className="cert-preview-document">
            <span className="cert-preview-sheet-header" />
            <span className="cert-preview-sheet-line cert-preview-sheet-line-short" />
            <span className="cert-preview-sheet-line" />
            <span className="cert-preview-sheet-line" />
            <span className="cert-preview-sheet-line cert-preview-sheet-line-short" />
          </div>
          <span className="cert-preview-title">{certification.title}</span>
        </div>
      </a>
      <div className="cert-card-body">
        {certification.date && (
          <div className="cert-card-meta">
            <span>{certification.date}</span>
          </div>
        )}
        <h3>{certification.title}</h3>
        <p className="cert-issuer">{certification.issuer}</p>
        {certification.type && <p className="cert-detail">{certification.type}</p>}
        {certification.institution && <p className="cert-detail">{certification.institution}</p>}
        {certification.recipient && <p className="cert-detail">Recipient: {certification.recipient}</p>}
        {certification.description && <p className="cert-description">{certification.description}</p>}
        {certification.skills.length > 0 && (
          <div className="cert-skills" aria-label="Certificate skills">
            {certification.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        )}
        <div className="cert-actions">
          <button className="cert-view-button" type="button" onClick={handleOpen}>
            View certificate <span aria-hidden="true">→</span>
          </button>
          <div className="cert-action-links">
            <a className="cert-open-link" href={certification.pdfUrl} target="_blank" rel="noreferrer">Open PDF</a>
            <a className="cert-download-link" href={certification.pdfUrl} download>Download PDF</a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CertificationCard;
