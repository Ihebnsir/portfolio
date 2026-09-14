import { useState } from 'react';

function PortraitCard() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <div className={`portrait-card ${imageAvailable ? '' : 'portrait-card-empty'}`}>
      <div className="portrait-frame">
        {imageAvailable ? (
          <img
            className="portrait-image"
            src="/portrait.jpg"
            alt="Portrait of Iheb Ncir"
            onError={() => setImageAvailable(false)}
          />
        ) : (
          <div className="portrait-placeholder">
            <span className="portrait-placeholder-mark" aria-hidden="true">+</span>
            <strong>Portrait unavailable</strong>
            <span>portrait.jpg</span>
          </div>
        )}
        <span className="portrait-corner portrait-corner-top" aria-hidden="true" />
        <span className="portrait-corner portrait-corner-bottom" aria-hidden="true" />
      </div>
      <div className="portrait-label">
        <span><i className="status-dot" />identity / verified</span>
        <span>01 — 01</span>
      </div>
    </div>
  );
}

export default PortraitCard;
