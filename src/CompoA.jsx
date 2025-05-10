import { FlavourContext } from './App';
import FlavouredCompo from './FlavouredCompo';
const CompoA = () => {
  return (
    <FlavourContext.Provider value='녹차'>
      <div className="mt-5"
        style={{ border: "2px solid black", padding: "20px" }}>
        <h2>CompoA (아버지)</h2>
        <FlavouredCompo />
      </div>
    </FlavourContext.Provider>
  )
}

export default CompoA;