import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import specific Bootstrap components if needed
// Example: import { Button, Container, Row, Col } from 'bootstrap';

const ServiceItem = ({ iconClass, title, description }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="class-item shadow-sm p-4 rounded bg-white">
      <div className={`icon my-3 text-danger fs-2 ${iconClass}`}></div>
      <h3 className="fs-5 py-2">{title}</h3>
      <p className="text-muted">{description}</p>
    </div>
  </div>
);

function Service (){
  const services = [
    { iconClass: 'fas fa-code', title: 'Desenvolvedor Web', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { iconClass: 'fas fa-pencil-ruler', title: 'Analista de Sistemas', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { iconClass: 'fas fa-project-diagram', title: 'Gestão de Projetos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <section className="services py-5" id="servico">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Projetos Desenvolvidos</h2>
            </div>
          </div>
        </div>
        <div className="row text-center">
          {services.map((service, index) => (
            <ServiceItem 
              key={index}
              iconClass={service.iconClass}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
