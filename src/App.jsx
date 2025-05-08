import { useState } from 'react';
import './App.css';

function App() {
  const [colors] = useState(
    ['#ffffcc', '#33ccff', '#66ff66', '#ffcc66', '#ff66ff']);

  return (
    <>
      <div>
        <h1>색 선택기</h1>
        <div>{
          colors.map((color, idx) => (
            <div key={idx} className="color-block"
              style={{ backgroundColor: color }} />
          ))
        }</div>
      </div>
    </>
  )
}

export default App
