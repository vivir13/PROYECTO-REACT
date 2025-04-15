import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoApp } from './assets/CarritoApp'
import  './assets/styles/card.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    < CarritoApp/>
   
  </StrictMode>,
  </BrowserRouter>
  
   
)
