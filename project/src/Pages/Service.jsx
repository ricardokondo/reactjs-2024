import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Service(){
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
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="class-item shadow-sm p-4 rounded bg-white">
              <div className="icon my-3 text-danger fs-2">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="fs-5 py-2">Desenvolvedor Web</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="class-item shadow-sm p-4 rounded bg-white">
              <div className="icon my-3 text-danger fs-2">
                <i className="fas fa-pencil-ruler"></i>
              </div>
              <h3 className="fs-5 py-2">Analista de Sistemas</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="class-item shadow-sm p-4 rounded bg-white">
              <div className="icon my-3 text-danger fs-2">
                <i className="fas fa-project-diagram"></i>
              </div>
              <h3 className="fs-5 py-2">Gestão de Projetos</h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Service