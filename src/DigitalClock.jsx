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
    <div className='clock-containter'>
      <div className='clock'>
        {clock.toLocaleTimeString()}
      </div>
    </div>
  )
}

export default DigitalClock
