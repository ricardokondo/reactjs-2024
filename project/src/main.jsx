import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sum from './Sum.jsx'
import MyButton from './MyButton.jsx'
import Profile from './Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Sum />
    <MyButton />
    <Profile/>
  </React.StrictMode>,
)
