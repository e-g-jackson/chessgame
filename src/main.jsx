import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChessBoard from './createChessBoard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ChessBoard />
  </StrictMode>,
)
