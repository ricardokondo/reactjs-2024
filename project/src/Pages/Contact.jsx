import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Contact(){
  return (
    <section className="contact py-5" id="contato">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className="fw-bold mb-5">Contato</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="contact-item d-flex mb-3">
              <div className="icon fs-4 text-danger">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text ms-3">
                <h3 className="fs-5">E-mail</h3>
                <p className="text-muted">email@email.com</p>
              </div>
            </div>
            <div className="contact-item d-flex mb-3">
              <div className="icon fs-4 text-danger">
                <i className="fas fa-phone"></i>
              </div>
              <div className="text ms-3">
                <h3 className="fs-5">Telefone</h3>
                <p className="text-muted">+55 (67) 99999-1234</p>
              </div>
            </div>
            <div className="contact-item d-flex mb-3">
              <div className="icon fs-4 text-danger">
                <i className="fas fa-map-marked"></i>
              </div>
              <div className="text ms-3">
                <h3 className="fs-5">Endereço</h3>
                <p className="text-muted">
                  Av. Paulista, nº100 - Campo Grande - MS
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact-form">
              <form action="">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      placeholder="Nome"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <input
                      type="text"
                      placeholder="Assunto"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <textarea
                      rows="5"
                      placeholder="Mensagem"
                      className="form-control form-control-lg fs-6 border-0 shadow-sm"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="btn btn-danger px-3"
                      style={{ width: '25%' }}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact