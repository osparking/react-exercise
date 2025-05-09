import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [clock, setClock] = useState(new Date());
useEffect(() => {
  setInterval(() => {
    setClock(new Date());
  }, 1000)
}, []);

  return (
    <div>
      <h1>영원한 흐름</h1>
    </div>
  )
}

export default App
