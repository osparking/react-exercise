import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colors] = useState(
    ['#ffffcc', '#33ccff', '#66ff66', '#ffcc66', '#ff66ff']);

  return (
    <>
      <div>
        <h1>색 선택기</h1>
      </div>
    </>
  )
}

export default App
