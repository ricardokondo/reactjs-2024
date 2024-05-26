import React from 'react'
import {
    useParams, useNavigate
 } from 'react-router-dom'

const ContactDetails = () => {
    
    // 6 - Route Parameters (Parâmetros de Rota)
    // O hook useParams() retorna um objeto contendo os parâmetros da rota atual.
    // Id é o parâmetro da rota que foi passado pelo Link no componente Contact.
    const { id } = useParams()

    // 7 - Redirecionamento de Rotas usando o hook useNavigate
    // O hook useNavigate() retorna uma função que pode ser usada para navegar entre rotas.
    const navigate = useNavigate()

    const handleAdd = () => {
        console.log('Adicionando contato')
        return navigate('/')
    }


  return (
      <div>
          <h1>Exibindo mais informações do contato: {id}</h1>
            <button onClick={handleAdd}>Adicionar Contato</button>
    </div>
  )
}

export default ContactDetails