import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Team = () => {
  const teamStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '3rem 0',
    transition: 'all 0.3s ease-in-out'
  };

  const memberStyle = {
    position: 'relative',
    transition: 'transform 0.3s ease-in-out',
    transform: 'scale(1)',
    overflow: 'hidden',
    opacity: 0,
    animation: 'fadeIn 1s ease-in-out forwards'
  };

  const imgStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease-in-out'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out'
  };

  const iconStyle = {
    color: '#fff',
    fontSize: '24px',
    margin: '0 10px',
    cursor: 'pointer'
  };

  const members = [
    { img: 'Andressa.jpeg', name: 'Andresa Cruz', role: 'Membro da Equipe', alt: 'Andresa Fernandes Lima Cruz' },
    { img: 'Daniela.jpeg', name: 'Daniela Salvador', role: 'Membro da Equipe', alt: 'Daniela Lima da Cruz Salvador' },
    { img: 'Ana Paula.jpeg', name: 'Ana Paula de Jesus', role: 'Membro da Equipe', alt: 'Ana Paula Santana de jesus' },
    { img: 'tiago.jpeg', name: 'Tiago Santos', role: 'Membro da Equipe', alt: 'Tiago Santos' },
    { img: 'Luana.jpeg', name: 'Luana Damasceno', role: 'Membro da Equipe', alt: 'Luana Santana Damasceno' },
    { img: 'hevelyn.jpeg', name: 'Hevelynn Martins', role: 'Orientador do Projeto', alt: 'Hevelynn Franco Martins' }
  ];

  return (
    <section id="team" style={teamStyle}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ animation: 'fadeIn 1s ease-in-out' }}>Nossa Equipe</h2>
        <div className="row">
          {members.map((member, index) => (
            <div key={index} className="col-md-2 text-center member-card" style={memberStyle} onMouseEnter={(e) => { e.currentTarget.querySelector('.social-overlay').style.opacity = '1'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('.social-overlay').style.opacity = '0'; }}>
              <img src={`./galeria/componentes/${member.img}`} alt={member.alt} className="rounded-circle mb-3" style={imgStyle} />
              <h5>{member.name}</h5>
              <p>{member.role}</p>
              <div className="social-overlay" style={overlayStyle}>
                <FaFacebook style={iconStyle} />
                <FaTwitter style={iconStyle} />
                <FaInstagram style={iconStyle} />
                <FaLinkedin style={iconStyle} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .member-card {
            text-align: center;
            animation: fadeIn 1s ease-in-out forwards;
            opacity: 0;
          }
          .member-card:nth-child(1) { animation-delay: 0s; }
          .member-card:nth-child(2) { animation-delay: 0.2s; }
          .member-card:nth-child(3) { animation-delay: 0.4s; }
          .member-card:nth-child(4) { animation-delay: 0.6s; }
          .member-card:nth-child(5) { animation-delay: 0.8s; }
          .member-card:nth-child(6) { animation-delay: 1s; }
        `}
      </style>
    </section>
  );
};

export default Team;
