import { useRef } from 'react';
import './App.css';

function App() {
  const msg = useRef("여러분, 안녕?");
  console.log(msg);
  return (
    <div>
      <h1>리액트 학습</h1>
    </div>
  )
}

export default App
