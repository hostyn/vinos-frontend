import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    box-sizing: border-box;
  }
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
