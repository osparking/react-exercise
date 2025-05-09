import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const refCnt = useRef(0);
  const [stateCnt, setStateCnt] = useState(0);

  useEffect(()=>{
    console.log("리렌더");    
  })
  
  const incStateCnt = () => {
    setStateCnt(stateCnt + 1);
  }
  const incRefCnt = () => {
    refCnt.current += 1;
    console.log("refCnt: ", refCnt.current);
  }

  return (
    <div>
      <p>상태 갯수: {stateCnt}</p>
      <button onClick={incStateCnt}>상태 증가</button>
      <br/>
      <p>참조 갯수: {refCnt.current}</p>
      <button onClick={incRefCnt}>참조 증가</button>
    </div>
  )
}

export default App
