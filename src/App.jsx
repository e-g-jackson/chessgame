import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//  import ChessBoard from './createChessBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>CHESS GAME</h1>
      <div id = 'app'>
        {/* App here */}
        {/* <ChessBoard /> */}
      </div>
    </>
  )
}

export default App
