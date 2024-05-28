import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import perfil from '../img/profile-ricardo.png'

function Home (){
  return (
      <section className="home py-5" id="home">
      <div className="container-lg">
        <div className="row min-vh-100 align-items-center align-content-center">
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="home-img text-center">
              <img
                src={perfil}
                className="rounded-circle mw-100"
                alt="Imagem do perfil"
              />
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0 order-md-first">
            <div className="home-text">
              <p className="text-muted mb-1">Olá!! Eu sou</p>
              <h1 className="text-danger text-uppercase fs-1 fw-bold">
                Ricardo M. Kondo
              </h1>
              <h2 className="fs-4">
                Professor, Analista de Sistemas e Desenvolvedor
              </h2>
              <p className="mt-4 text-muted">
                Seja bem-vindo ao meu portfólio de apresentação.
              </p>
              <a href="#portfolio" className="btn btn-danger px-3 mt-3"
                >Meus Trabalhos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home