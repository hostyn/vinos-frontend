import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/fonts.css'
import AuthProvider from './context/authContext'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)
