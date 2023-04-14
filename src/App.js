import "./App.css";

function App() {
  const [percentage, setPercentage] = useState(35);

  return (
    <div className="App">
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={percentage}
        onChange={(e) => setPercentage(e.target.value)}
      />
    </div>
  );
}

export default App;
