import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Nossos Serviços</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Treinamento VR</h5>
                <p className="card-text">Simulações realistas para capacitação profissional.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Desenvolvimento Customizado</h5>
                <p className="card-text">Soluções VR adaptadas às necessidades da sua equipe.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Consultoria</h5>
                <p className="card-text">Aconselhamento especializado em tecnologias VR.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
