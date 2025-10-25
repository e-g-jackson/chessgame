import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import initialize from './initialize'
// import createChessBoard from './createChessBoard'

function App() {
  const [initialized, initiate] = useState(false);
  const [board, setBoard] = useState(() => {
    console.log(`initialized = ${initialized}`)
    if (initialized == false){
      initialize();
      initiate(true);
      console.log('inside if-statement');
      console.log(`initialized = ${initialized}`);
    } else {
      console.log('already initialized')
    }
  })
  

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
