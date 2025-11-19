import React from 'react';
import { FaVrCardboard, FaTools, FaEye } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Sobre projeto VIRTECH</h2>
        <div className="row mb-5">
          <div className="col-md-8 mx-auto">
            <p className="text-center lead">
              O projeto VIRTECH utiliza simulações de treinamentos de atividades reais dentro da indústria, focando em criar um ambiente realista ao operacional em forma simulada.
              Através da realidade virtual, proporcionamos experiências imersivas que permitem aos profissionais treinarem em cenários industriais seguros e controlados,
              aprimorando habilidades e reduzindo riscos no ambiente de trabalho real.
            </p>
          </div>
        </div>
        <div className="row text-center mb-5">
          <div className="col-md-4">
            <FaVrCardboard size={50} className="mb-3" />
            <h5><strong>Simulação Realista</strong></h5>
            <p>Ambientes virtuais que replicam com precisão operações industriais.</p>
          </div>
          <div className="col-md-4">
            <FaTools size={50} className="mb-3" />
            <h5><strong>Treinamento Industrial</strong></h5>
            <p>Preparação prática para atividades reais no setor industrial.</p>
          </div>
          <div className="col-md-4">
            <FaEye size={50} className="mb-3" />
            <h5><strong>Experiência Imersiva</strong></h5>
            <p>Aprendizado envolvente através de tecnologias avançadas de VR.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/galeria/sobre/Gemini_Generated_Image_7dqc927dqc927dqc.png" className="card-img-top" alt="Desenho Técnico VR" />
              <div className="card-body">
                <h5 className="card-title"><strong>Desenho Técnico do VR</strong></h5>
                <p className="card-text">Representação detalhada dos componentes e esquemas do sistema de realidade virtual.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/galeria/sobre/Gemini_Generated_Image_g9f8qjg9f8qjg9f8.png" className="card-img-top" alt="Treinamento VR" />
              <div className="card-body">
                <h5 className="card-title"><strong>Treinamento Interativo</strong></h5>
                <p className="card-text">Interação prática com equipamentos virtuais em tempo real.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="/galeria/sobre/Gemini_Generated_Image_gknvr3gknvr3gknv.png" className="card-img-top" alt="Modelo 3D Oculus" />
              <div className="card-body">
                <h5 className="card-title"><strong>Modelo 3D do Oculus</strong></h5>
                <p className="card-text">Visualização tridimensional do dispositivo Oculus para experiências imersivas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
