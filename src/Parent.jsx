import React, { useState } from 'react';
import DigitalClock from './DigitalClock';

const Parent = () => {
  const [showClock, setShowClock] = useState(true);

  const toggleClock = () => {
    setShowClock(flag => !flag);
  }

  return (
    <div>
      <h1>영원한 흐름</h1>
      <button onClick={toggleClock}>
        {showClock ? "시계 숨김" : "시계 표시"}
      </button>
      {showClock && <DigitalClock />}
    </div>
  )
}

export default Parent