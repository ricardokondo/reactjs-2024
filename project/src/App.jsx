import './App.css'
import Navbar from './components/Navbar'

// 2 - Reaproveitando o componente App (estrutura base da aplicação)
// O componente App agora é um componente de layout que contém o componente Outlet.
// O Outlet é um componente que renderiza o componente correspondente à rota atual.

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <h1>React Router</h1>
      {/* 4 - Incluindo o Outlet */}
      <Outlet/>
    </div>
  )
}

export default App
