import { useState } from 'react';
import './App.css';

function App() {
  const [mousePsn, setMousePsn] = useState({ x: 0, y: 0 });

  return (
    <div>
      <h1>마우스 좌표:</h1>
    </div>
  )
}

export default App
