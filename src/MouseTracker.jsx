import React, { useEffect, useState } from 'react';
import './App.css';

const MouseTracker = () => {
  const [mousePsn, setMousePsn] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePsn({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);

  }, []);

  return (
    <div>
      <h1>마우스 좌 표:</h1>
      <p>x: {mousePsn.x}, y: {mousePsn.y}</p>
    </div>
  )
}

export default MouseTracker
