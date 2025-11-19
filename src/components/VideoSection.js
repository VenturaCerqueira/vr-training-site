import React from 'react';

const VideoSection = () => {
  return (
    <section id="video" className="video-section">
      <video autoPlay muted loop className="background-video">
        <source src="/galeria/WhatsApp Video 2025-11-11 at 15.04.26.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </section>
  );
};

export default VideoSection;
