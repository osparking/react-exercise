import { useState } from 'react';
import './App.css';

function App() {
  const [clock, setClock] = useState(new Date());

  return (
    <div>
      <h1>영원한 흐름</h1>
    </div>
  )
}

export default App
