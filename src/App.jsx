import './App.css';

function FlavouredCompo({flavour}) {
  return <div>아이스크림 맛: {flavour}</div>
}

function CompoA({flavour}) {
  return <FlavouredCompo flavour={flavour} />;
}

function App() {
  const flavour = "바닐라";

  return (
    <div className="mt-5">
      <CompoA flavour={flavour}/>
    </div>
  )
}

export default App
