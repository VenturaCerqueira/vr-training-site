import React from 'react';
import { FaUserMd, FaCode, FaGraduationCap } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Nossos Serviços</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="step-card">
              <div className="step-icon">
                <FaUserMd size={40} />
              </div>
              <div className="step-number">Etapa 1</div>
              <h5 className="step-title">Consultoria</h5>
              <p className="step-description">Aconselhamento especializado em tecnologias VR para identificar necessidades e oportunidades.</p>
              <ul className="step-list">
                <li>Análise de requisitos específicos da sua equipe</li>
                <li>Avaliação de tecnologias VR adequadas</li>
                <li>Planejamento estratégico para implementação</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="step-card">
              <div className="step-icon">
                <FaCode size={40} />
              </div>
              <div className="step-number">Etapa 2</div>
              <h5 className="step-title">Desenvolvimento Customizado</h5>
              <p className="step-description">Criação de soluções VR personalizadas adaptadas às necessidades da sua equipe.</p>
              <ul className="step-list">
                <li>Design de ambientes virtuais realistas</li>
                <li>Desenvolvimento de cenários de treinamento</li>
                <li>Integração com sistemas existentes</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="step-card">
              <div className="step-icon">
                <FaGraduationCap size={40} />
              </div>
              <div className="step-number">Etapa 3</div>
              <h5 className="step-title">Treinamento VR</h5>
              <p className="step-description">Capacitação profissional através de simulações realistas em realidade virtual.</p>
              <ul className="step-list">
                <li>Treinamentos práticos em ambientes seguros</li>
                <li>Avaliação de desempenho e feedback</li>
                <li>Certificação de competências adquiridas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
