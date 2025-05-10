import { createContext, useContext } from 'react';
import './App.css';

function FlavouredCompo() {
  const flavour = useContext(FlavourContext);

  return (
    <div className="mt-5"
      style={{ border: "2px solid black", padding: "20px" }}>
      <h2>FlavouredCompo (나)</h2>
      아이스크림 맛: {flavour}
    </div>
  )
}

function CompoA() {
  return (
    <div className="mt-5"
      style={{ border: "2px solid black", padding: "20px" }}>
      <h2>CompoA (아버지)</h2>
      <FlavouredCompo />
    </div>
  )
}

const FlavourContext = createContext();

function App() {

  return (
    <div className="mt-5"
      style={{ border: "2px solid black", padding: "20px" }}>
      <h2>App (할아버지)</h2>
      <CompoA />
    </div>
  )
}

export default App
