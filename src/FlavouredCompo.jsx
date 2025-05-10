import { useContext } from 'react';
import { FlavourContext } from './App';

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

export default FlavouredCompo