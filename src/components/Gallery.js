import React, { useState } from 'react';
import img1 from './galeria/WhatsApp Image 2025-11-18 at 20.33.22 (1).jpeg';
import img2 from './galeria/WhatsApp Image 2025-11-18 at 20.33.22.jpeg';
import img3 from './galeria/WhatsApp Image 2025-11-18 at 20.33.23 (1).jpeg';
import img4 from './galeria/WhatsApp Image 2025-11-18 at 20.33.23.jpeg';
import img5 from './galeria/WhatsApp Image 2025-11-18 at 20.34.12 (1).jpeg';
import img6 from './galeria/WhatsApp Image 2025-11-18 at 20.34.12 (2).jpeg';
import img7 from './galeria/WhatsApp Image 2025-11-18 at 20.34.12.jpeg';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Galeria</h2>
        <div className="row g-3">
          {images.map((img, index) => (
            <div key={index} className="col-6 col-md-4">
              <div className="gallery-item" onClick={() => openModal(img)}>
                <img src={img} alt={`Imagem ${index + 1}`} className="img-fluid gallery-img" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <img src={selectedImage} alt="Imagem ampliada" className="img-fluid" />
              </div>
              <button type="button" className="btn-close position-absolute top-0 end-0 m-3" onClick={closeModal}></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
