import './App.css';

function CompoA({flavour}) {

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
