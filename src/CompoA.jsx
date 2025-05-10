import { useState } from 'react';
import { FlavourContext } from './App';
import FlavouredCompo from './FlavouredCompo';
const CompoA = () => {
  const [flavour, setFlavour] = useState("플레인");
  const changeFlavour = () => {
    setFlavour(flavour === "바닐라" ? "플레인" : "바닐라");
  }

  return (    
    <FlavourContext.Provider value={flavour}>
      <button onClick={changeFlavour}>맛 변경</button>
      <div className="mt-5"
        style={{ border: "2px solid black", padding: "20px" }}>
        <h2>CompoA (아버지)</h2>
        <FlavouredCompo />
      </div>
    </FlavourContext.Provider>
  )
}

export default CompoA;