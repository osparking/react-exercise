import { ColorPicker } from "primereact/colorpicker";
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const colors = ['#ffffcc', '#33ccff', '#66ff66', '#ffcc66', '#ff66ff'];
  const [bgColor, setBgColor] = useState(colors[0]);

  function handleClick(color) {
    setBgColor(color);
    document.body.style.backgroundColor = color;
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, []);

  return (
    <>
<h1>색 선택기</h1>
<div className="color-palette">{
  colors.map((color, idx) => (
    <div key={idx} className="color-block"
      style={{ backgroundColor: color }}
      onClick={() => handleClick(color)} />
  ))
}</div>
<div className="custom-color-picker">
  <input type="color" value={bgColor}
    onChange={(e) => handleClick(e.target.value)} />
</div>
    </>
  )
}

export default App
