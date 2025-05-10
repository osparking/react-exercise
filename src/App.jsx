import { createContext } from 'react';
import './App.css';
import CompoA from './CompoA';
import CompoB from './CompoB';

export const FlavourContext = createContext("초콜릿");

function App() {

  return (
    <div className="mt-5"
      style={{ border: "2px solid black", padding: "20px" }}>
      <h2>App (할아버지)</h2>
      <CompoA />
      <CompoB />
    </div>
  )
}

export default App;
