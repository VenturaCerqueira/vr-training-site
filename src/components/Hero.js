import React from 'react';
import capaVideo from './galeria/video/capa/capa.mp4';

const Hero = () => {
  return (
    <section id="home" className="hero bg-primary text-white py-5" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <video className="hero-video" autoPlay loop muted>
        <source src={capaVideo} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="hero-overlay"></div>
      <div className="container text-center" style={{ position: 'relative', zIndex: 3 }}>
        <h1 className="display-1">VIRTECH</h1>
        <p className="lead">Treinamento virtual de segurança do trabalho</p>
        <a href="#about" className="btn btn-light btn-lg scroll-down-btn">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
