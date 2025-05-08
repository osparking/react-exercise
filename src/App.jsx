import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = `계수기:${count}`;
  }, [count]);

  return (
    <>
      <h1>useEffect 후크 시험</h1>
      <button onClick={incCount}>증가</button>
    </>
  )
}

export default App
