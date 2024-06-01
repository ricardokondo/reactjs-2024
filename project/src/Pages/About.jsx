import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SectionTitle = ({ title }) => (
  <div className="section-title text-center">
    <h2 className="fw-bold mb-5">{title}</h2>
  </div>
);

const AboutText = () => (
  <div className="about-text">
    <h3 className="fs-4 mb-3">Formação</h3>
    <p className="text-muted">
      Mestrado Acadêmico em Ciência da Computação pela Faculdade de Computação da Fundação Universidade Federal de Mato Grosso do Sul – UFMS.
    </p>
    <p className="text-muted">
      Graduação Bacharel em Ciências da Computação pela Fundação Universidade Federal de Mato Grosso do Sul - UFMS.
    </p>
  </div>
);

const FactItem = ({ number, description }) => (
  <div className="col-sm-4">
    <div className="fact-item">
      <h4 className="fs-1 fw-bold">{number}</h4>
      <p className="text-muted">{description}</p>
    </div>
  </div>
);

const SkillItem = ({ skill, value }) => (
  <div className="skill-item mb-4">
    <h3 className="fs-6">{skill}</h3>
    <div
      className="progress"
      role="progressbar"
      aria-label={skill}
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ height: '5px' }}
    >
      <div className="progress-bar bg-danger" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const SocialLink = ({ href, className, target}) => (
  <a href={href} className="text-dark me-2" target={target}>
    <i className={className}></i>
  </a>
);

function About() {
    
  const skills = [
    { skill: 'HTML', value: 25 },
    { skill: 'CSS', value: 30 },
    { skill: 'JavaScript', value: 40 },
    { skill: 'PHP', value: 45 },
    { skill: 'Banco de Dados', value: 50 },
    { skill: 'Gerência de Projetos', value: 80 },
    { skill: 'Modelagem de Processos', value: 85 },
    { skill: 'Engenharia de Requisitos', value: 90 },
  ];

  const facts = [
    { number: 10, description: 'Anos de Experiência' },
    { number: 5, description: 'Anos de Experiência Docência' },
    { number: 8, description: 'Projetos Executados' },
  ];

  return (
    <section className="about py-5" id="sobre">
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col lg={8}>
            <SectionTitle title="Sobre Mim" />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-5 mt-md-0">
            <AboutText />
            <Row className="text-center text-uppercase my-3">
              {facts.map((fact, index) => (
                <FactItem key={index} {...fact} />
              ))}
            </Row>
            <Row className="mb-4">
              <Col lg={12} className="d-flex align-items-center">
                <Button href="/#" className="px-3 btn-danger me-5">Download CV</Button>
                <div className="social-links">
                  <SocialLink href="https://facebook.com/" className="bi bi-facebook" target="_blank"/>
                  <SocialLink href="https://www.linkedin.com/" className="bi bi-linkedin" target="_blank" />
                  <SocialLink href="https://www.instagram.com" className="bi bi-instagram" target="_blank" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            {skills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
