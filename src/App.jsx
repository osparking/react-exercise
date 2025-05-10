import './App.css';

function FlavouredCompo({ flavour }) {
  return <div>아이스크림 맛: {flavour}</div>
}

function CompoA({ flavour }) {
  return <FlavouredCompo flavour={flavour} />;
}

function App() {
  const flavour = "바닐라";

  return (
    <div className="mt-5"
      style={{ border: "2px solid black", padding: "20px" }}>
      <h2>App (할아버지)</h2>
      <CompoA flavour={flavour} />
    </div>
  )
}

export default App
