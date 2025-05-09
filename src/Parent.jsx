import React, { useState } from 'react'
import MouseTracker from './MouseTracker';

const Parent = () => {
  const [showMTracker, setShowMTracker] = useState(true);

  const toggleMouseTracker = () => {
    setShowMTracker(flag => !flag);
  }

  return (
    <div>
    </div>
  )
}

export default Parent