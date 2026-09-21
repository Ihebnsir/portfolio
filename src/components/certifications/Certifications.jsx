import { useState } from 'react';
import CertificationCard from './CertificationCard';
import CertificationModal from './CertificationModal';
import certifications from './certificationsData';

const filters = ['All', 'Networking', 'Full-Stack Development', 'Web Development', 'Blockchain / Web3', 'Other'];

function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedCertification, setSelectedCertification] = useState(null);

  const openCertificate = (certification) => {
    if (!certification) return;
    window.open(certification.pdfUrl, '_blank', 'noopener,noreferrer');
  };

  const visibleCertifications = certifications.filter((certification) => {
    const matchesFilter = activeFilter === 'All'
      || certification.category === activeFilter
      || (activeFilter === 'Other' && !['Networking', 'Full-Stack Development', 'Web Development', 'Blockchain / Web3'].includes(certification.category));
    const searchText = [certification.title, certification.issuer, certification.category, ...certification.skills].join(' ').toLowerCase();
    return matchesFilter && searchText.includes(query.toLowerCase());
  });

  return (
    <section id="certifications" className="certifications-section" aria-labelledby="certifications-title">
      <div className="certifications-grid" aria-hidden="true" />
      <div className="container certifications-container">
        <header className="certifications-header cert-reveal cert-reveal-one">
          <span className="section-eyebrow"><i />Learning / Verified</span>
          <h2 id="certifications-title">Certifications &amp; <span>Professional Learning</span></h2>
          <p>A collection of certifications and training experiences supporting my background in telecommunications, networking, software development, and emerging technologies.</p>
        </header>

        <div className="certifications-toolbar cert-reveal cert-reveal-two">
          <div className="cert-filter-list" role="group" aria-label="Filter certifications">
            {filters.map((filter) => (
              <button className={activeFilter === filter ? 'is-active' : ''} type="button" key={filter} onClick={() => setActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
          <label className="cert-search">
            <span aria-hidden="true">⌕</span>
            <input type="search" placeholder="Search certifications..." value={query} onChange={(event) => setQuery(event.target.value)} />
          </label>
        </div>

        <div className="cert-results-meta" aria-live="polite">
          <span><strong>{visibleCertifications.length.toString().padStart(2, '0')}</strong> verified learning records</span>
          <span>CCNA / JS / HEDERA</span>
        </div>

        {visibleCertifications.length > 0 ? (
          <div className="cert-grid">
            {visibleCertifications.map((certification) => (
              <CertificationCard key={certification.id} certification={certification} onView={openCertificate} />
            ))}
          </div>
        ) : (
          <div className="cert-empty">No certification matches this filter.</div>
        )}
      </div>
      <CertificationModal certification={selectedCertification} onClose={() => setSelectedCertification(null)} />
    </section>
  );
}

export default Certifications;
