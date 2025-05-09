import { useState } from 'react';
import './App.css';

function App() {
  const [mousePsn, setMousePsn] = useState({ x: 0, y: 0 });

  return (
    <div>
      <h1>마우스 좌표:</h1>
      <p>x: {mousePsn.x}, y: {mousePsn.y}</p>
    </div>
  )
}

export default App
