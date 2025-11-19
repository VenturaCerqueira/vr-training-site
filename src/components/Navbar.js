import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${scrolled ? 'bg-dark' : 'bg-transparent'} fixed-top`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">VIRTECH</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a className="nav-link" href="#home"><i className="bi bi-house-door me-2"></i> Home</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#about"><i className="bi bi-info-circle me-2"></i> Sobre</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#services"><i className="bi bi-gear me-2"></i> Serviços</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#team"><i className="bi bi-people me-2"></i> Equipe</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#gallery"><i className="bi bi-images me-2"></i> Galeria</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link" href="#contact"><i className="bi bi-envelope me-2"></i> Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
