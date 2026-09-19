function CertificationCard({ certification, onView }) {
  return (
    <article className="cert-card has-pdf">
      <div className="cert-preview">
        <iframe src={certification.pdfUrl} title={`${certification.title} certificate preview`} />
        <span className="cert-category">{certification.category}</span>
      </div>
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
          <button className="cert-view-button" type="button" onClick={() => onView(certification)}>
            View certificate <span aria-hidden="true">→</span>
          </button>
          <a className="cert-open-link" href={certification.pdfUrl} target="_blank" rel="noreferrer">Open PDF</a>
        </div>
      </div>
    </article>
  );
}

export default CertificationCard;
