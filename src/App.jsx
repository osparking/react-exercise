import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const inputTop = useRef(null);
  const setFocusBox1 = () => {
    inputTop.current.focus();
    inputTop.current.style.backgroundColor = "pink";
  }
  const inputBottom = useRef(null);
  const setFocusBox2 = () => {
    inputBottom.current.focus();
    inputBottom.current.style.backgroundColor = "pink";
  }
  const focusLost = (e) => {
    e.target.style.backgroundColor = "white";
  }

  return (
    <div className="mt-5">
      <h1>리액트 연습</h1>
      <br/>
      <input type="text" ref={inputTop} placeholder='상자 1' 
        onBlur={focusLost}/>
      <br/>
      <button onClick={setFocusBox1}>상자 1 입력</button>
      <br/>
      <input type="text" ref={inputBottom} placeholder='상자 2'
        onBlur={focusLost}/>
      <br/>
      <button onClick={setFocusBox2}>상자 2 입력</button>
    </div>
  )
}

export default App
