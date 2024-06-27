import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  {/*encuentra las rutas de las paginas que estan dentro de la carpeta routes */}
    <App />
  </BrowserRouter>

)