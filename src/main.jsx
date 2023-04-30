import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BaseStyles from './styles/BaseStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BaseStyles />
  </React.StrictMode>
)
