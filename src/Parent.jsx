import React, { useState } from 'react'
import MouseTracker from './MouseTracker';

const Parent = () => {
  const [showMTracker, setShowMTracker] = useState(true);

  const toggleMouseTracker = () => {
    setShowMTracker(flag => !flag);
  }

  return (
    <div>
      <h1>마우스 추적기</h1>
      <button onClick={toggleMouseTracker}>
        {showMTracker ? "추적기 숨김" : "추적기 표시"}
      </button>
      {showMTracker && <MouseTracker />}
    </div>
  )
}

export default Parent