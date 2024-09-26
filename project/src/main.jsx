import React, { Children, Component } from 'react'
import ReactDOM from 'react-dom/client'
import FamiliarProps from './FamiliarProps.jsx'
import ComponentProps from './ComponentProps.jsx'
import Profile from './ComponentChildren.jsx';
import './styles.css';
import './stylesRelogio.css';
import Relogio from './Relogio.jsx';
import Requisicao from './Requisicao.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Requisicao />
  </React.StrictMode>,
)
