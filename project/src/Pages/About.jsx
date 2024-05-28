import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function About (){
  return (
    <section className="about py-5" id="sobre">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Sobre Min</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="about-text">
              <h3 className="fs-4 mb-3">Formação</h3>
              <p className="text-muted">
                Mestrado Acadêmico em Ciência da Computação pela Faculdade de
                Computação da Fundação Universidade Federal de Mato Grosso do
                Sul – UFMS.
              </p>
              <p className="text-muted">
                Graduação Bacharel em Ciências da Computação pela Fundação
                Universidade Federal de Mato Grosso do Sul - UFMS.
              </p>
            </div>
            <div className="row text-center text-uppercase my-3">
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold">10</h4>
                  <p className="text-muted">Anos de Experiência</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold">5</h4>
                  <p className="text-muted">Anos de Experiência Docência</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fact-item">
                  <h4 className="fs-1 fw-bold">8</h4>
                  <p className="text-muted">Projetos Executados</p>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-lg-12 d-flex align-items-center">
                <a href="/#" className="btn px-3 btn-danger me-5">Download CV</a>
                <div className="social-links">
                  <a href="https://facebook.com/" className="text-dark me-2"><i className="fab fa-facebook-f"> </i></a>
                  <a href="https://www.linkedin.com/" className="text-dark me-2"><i className="fab fa-linkedin-in"> </i></a>
                  <a href="https://www.instagram.com" className="text-dark me-2"><i className="fab fa-instagram"> </i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skill-item mb-4">
              <h3 className="fs-6">HTML</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '5px' }}
              >
                <div className="progress-bar bg-danger" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">CSS</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '5px' }}
              >
                <div className="progress-bar bg-danger" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">JavaScript</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '5px' }}
              >
                <div className="progress-bar bg-danger" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">PHP</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="45"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '5px' }}
              >
                <div className="progress-bar bg-danger" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Banco de Dados</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '5px' }}
              >
                <div className="progress-bar bg-danger" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Gerência de Projetos</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '5px' }}
              >
                <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Modelagem de Processos</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '5px' }}
              >
                <div className="progress-bar bg-danger" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item mb-4">
              <h3 className="fs-6">Engenharia de Requisitos</h3>
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: '5px' }}
              >
                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
