import React from 'react';

const Team = () => {
  return (
    <section id="team" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Nossa Equipe</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Membro 1" className="rounded-circle mb-3" />
            <h5>João Silva</h5>
            <p>Desenvolvedor VR</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Membro 2" className="rounded-circle mb-3" />
            <h5>Maria Santos</h5>
            <p>Designer 3D</p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://via.placeholder.com/150" alt="Membro 3" className="rounded-circle mb-3" />
            <h5>Carlos Oliveira</h5>
            <p>Especialista em Treinamento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
