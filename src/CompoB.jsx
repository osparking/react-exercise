import { FlavourContext } from './App';
import FlavouredCompo from './FlavouredCompo';
const CompoB = () => {
  return (
    <FlavourContext.Provider value='바닐라'>
      <div className="mt-5"
        style={{ border: "2px solid black", padding: "20px" }}>
        <h2>CompoA (아버지)</h2>
        <FlavouredCompo />
      </div>
    </FlavourContext.Provider>
  )
}

export default CompoB;