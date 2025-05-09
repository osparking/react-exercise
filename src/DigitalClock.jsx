import React, { useEffect, useState } from 'react';
import './App.css';

const DigitalClock = () => {
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
      console.log("changed");
    }, 1000);

    return () => { clearInterval(intervalId); };
  }, []);

  const formatted = clock.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  
  return (
    <div>
      <p>{formatted}</p>
    </div>
  )
}

export default DigitalClock
