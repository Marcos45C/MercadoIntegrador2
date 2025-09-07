import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApiPrueba } from './components/ApiPrueba'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiPrueba/>
  </StrictMode>,
)
