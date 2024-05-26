import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importar as páginas
import Home from './routes/Home'
import Contact from './routes/Contact'
import ErrorPage from './routes/ErrorPage'
import ContactDetails from './routes/ContactDetails'

// 1 - Configurando router
import { 
  createBrowserRouter, 
  RouterProvider, 
  Navigate,
 } from 'react-router-dom'

// createBrowserRouter é uma função que cria um objeto de roteamento para a aplicação 
 // Recebe um array de objetos de configuração de rotas
/* const router = createBrowserRouter([
  {
    // 2 - Configurando as rotas do router 
    // path é o caminho da rota
    // element é o componente que será renderizado
    path: "/",
    element: <Home/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  }
]) */

const router = createBrowserRouter([
  {
    // 2 - Configurando as rotas do router
    // path é o caminho da rota
    // element é o componente que será renderizado
    // errorElement é o componente que será renderizado quando a rota não for encontrada (404) 
    // children é um array de objetos de configuração de rotas que são filhas da rota atual
    // O componente App agora é um componente de layout que contém o componente Outlet.
    // O Outlet é um componente que renderiza o componente correspondente à rota atual.
    // A atualização do componente App.jsx é necessária para incluir o Outlet.

    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
      // 5 - Rotas Dinâmicas (Dynamic Routes)
      // A rota alinhada é uma rota que é filha de outra rota.
      // Path é o caminho da rota e é passado id como parâmetro para a rota. O ":" indica que id é um parâmetro. 
      // Esse id é dinâmico e pode ser acessado no componente de rota.
        path: "/contact/:id",
        element: <ContactDetails />,
      },

      // 8 - Navigate para rotas não existentes. Por exemplo, se a página de contato antiga for acessada, o usuário será redirecionado para a página de contato atual.
      
      {
        path: "oldcontact",
        element: <Navigate to="/contact " />,
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    {/* 3 - Incluindo o RouterProvider
    O RouterProvider é um componente que fornece o contexto de roteamento para a aplicação.
    Ele recebe uma propriedade router que é o objeto de roteamento criado com createBrowserRouter.
    */}
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
