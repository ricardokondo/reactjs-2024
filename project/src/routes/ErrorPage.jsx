import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
      <div>
      <h1>Erro Página Não Encontrada</h1>
      <Link to="/">Voltar Tela Principal</Link>
    </div>
  )
}

export default ErrorPage