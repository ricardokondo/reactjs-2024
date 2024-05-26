import React from "react"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
      <div>
          <h1>Página de Contato</h1>
          {/** 5 - Nested Routes (Rotas Aninhadas) */}
          <p>
                <Link to="/contact/1">Detalhes do Contato 1</Link>
          </p>
          <p>
                <Link to="/contact/2">Detalhes do Contato 2</Link>
          </p>
          <p>
                <Link to="/contact/3">Detalhes do Contato 3</Link>
          </p>
    </div>
  )
}

export default Contact