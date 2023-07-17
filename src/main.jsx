import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter nos implementa la navegación entre páginas */}
    <BrowserRouter basename='/FED-13-07-Proyecto-App-TheMovieDB'>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
