import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'container/App/App'
import { StyledEngineProvider } from '@mui/material/styles'
import 'reset.css'
import 'style.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
)
