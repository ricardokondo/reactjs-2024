import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function Header() {
  return (
    <header>
      <nav className="navbar navbar-light fixed-top bg-light shadow-sm">
        <div className="container-lg">
          <a className="navbar-brand text-danger fw-bolder fs-4" href="#"
            >Meu Portfólio</a>
          <div className="dropdown">
            <button
              className="btn btn-secondary btn-danger px-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
                <i className="bi bi-list"></i>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
                      >
              <li><a className="dropdown-item" href="#home">Home</a></li>
              <li><a className="dropdown-item" href="#sobre">Sobre</a></li>
              <li><a className="dropdown-item" href="#servico">Serviços</a></li>
              <li><a className="dropdown-item" href="#portfolio">Portfólio</a></li>
              <li><a className="dropdown-item" href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header