import { useState } from 'react';

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Go to home">
          <span className="brand-mark" aria-hidden="true">IN</span>
          <span className="brand-name">Iheb Ncir</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-panel ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
          <ul className="nav-links">
            {navigationItems.map((item, index) => (
              <li key={item.href}>
                <a
                  className={index === 0 ? 'active' : ''}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="nav-status" href="#contact" onClick={closeMenu}>
            <span className="status-dot" aria-hidden="true" />
            Available to connect
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
