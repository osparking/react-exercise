import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const inputTop = useRef(null);
  const setFocusBox1 = () => {
    inputTop.current.focus();
  }

  return (
    <div className="mt-5">
      <h1>리액트 연습</h1>
      <br/>
      <input type="text" ref={inputTop} placeholder='상자 1'/>
      <br/>
      <button onClick={setFocusBox1}>상자 1 입력</button>
    </div>
  )
}

export default App
