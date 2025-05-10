import { createContext, useState } from 'react';
import './App.css';
import CompoA from './CompoA';
import CompoB from './CompoB';

function App() {
  const [flavour, setFlavour] = useState("초콜릿");
  const changeFlavour = () => {
    setFlavour(flavour === "초콜릿" ? "플레인" : "초콜릿");
  }
  return (
    <FlavourContext.Provider value={flavour}>
      <div className="mt-5"
        style={{ border: "2px solid black", padding: "20px" }}>
        <h2>App (할아버지)</h2>
        <CompoA />
        <button onClick={changeFlavour}>맛 변경</button>
        <CompoB />
      </div>
    </FlavourContext.Provider>
  )
}

export const FlavourContext = createContext("초콜릿");
export default App;
