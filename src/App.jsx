import { createContext, useContext, useState } from 'react';
import './App.css';
import CompoA from './CompoA';
import CompoB from './CompoB';

function App() {
  const [flavour, setFlavour] = useState("초콜릿");
  const changeFlavour = () => {
    setFlavour(flavour === "초콜릿" ? "플레인" : "초콜릿");
  }
  return (
    <div>
      <GlobalIceCream />
      <FlavourContext.Provider value={flavour}>
        <div className="mt-5"
          style={{ border: "2px solid black", padding: "20px" }}>
          <h2>App (할아버지)</h2>
          <CompoA />
          <button onClick={changeFlavour}>맛 변경</button>
          <CompoB />
        </div>
      </FlavourContext.Provider>
      <FlavourContext.Provider value="한라봉">
        <GlobalIceCream />
      </FlavourContext.Provider>
    </div>
  )
}

export const FlavourContext = createContext("플레인");
export default App;

function GlobalIceCream() {
  const flavour = useContext(FlavourContext);

  return (
    <div className="mt-5"
      style={{ border: "2px solid crimson", padding: "20px" }}>
      <h2>GlobalIceCream (공급자 외부)</h2>
      아이스크림 맛: {flavour}
    </div>
  )
}
