import { createContext } from 'react';
import './App.css';
import FlavouredCompo from './FlavouredCompo';

function CompoA() {
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

export const FlavourContext = createContext("초콜릿");

function App() {

  return (
    <div className="mt-5"
      style={{ border: "2px solid black", padding: "20px" }}>
      <h2>App (할아버지)</h2>
      <CompoA />
    </div>
  )
}

export default App;
