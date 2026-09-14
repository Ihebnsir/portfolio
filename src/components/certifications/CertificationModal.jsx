import { useEffect } from 'react';

function CertificationModal({ certification, onClose }) {
  useEffect(() => {
    if (!certification) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [certification, onClose]);

  if (!certification) return null;

  return (
    <div className="cert-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="cert-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className="cert-modal-header">
          <div>
            <span className="cert-eyebrow">Verified document</span>
            <h3 id="certificate-modal-title">{certification.title}</h3>
          </div>
          <button className="cert-modal-close" type="button" onClick={onClose} aria-label="Close certificate preview">×</button>
        </div>
        <div className="cert-modal-image-wrap">
          <iframe src={certification.pdfUrl} title={`${certification.title} certificate document`} />
        </div>
      </div>
    </div>
  );
}

export default CertificationModal;
