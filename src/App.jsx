import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>useEffect 후크 시험</h1>
    </>
  )
}

export default App
