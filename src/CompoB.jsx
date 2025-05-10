import { FlavourContext } from './App';
import FlavouredCompo from './FlavouredCompo';
const CompoB = () => {
  return (
    <div className="mt-5"
      style={{ border: "2px solid black", padding: "20px" }}>
      <h2>CompoB (아버지)</h2>
      <FlavouredCompo />
    </div>
  )
}

export default CompoB;