import React, { useEffect, useState } from 'react';
import './App.css';

const MouseTracker = () => {
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>영원한 흐름</h1>
      <p>{clock.getSeconds()}</p>
    </div>
  )
}

export default MouseTracker
