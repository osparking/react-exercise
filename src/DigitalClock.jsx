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

  return (
    <div>
      <p>{clock.toLocaleTimeString()}</p>
    </div>
  )
}

export default DigitalClock
