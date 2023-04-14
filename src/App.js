import { useState } from "react";
import "./App.css";
import CircularProgressBar from "./CircularProgressBar";

function App() {
  const [percentage, setPercentage] = useState(35);

  return (
    <div className="App">
      <CircularProgressBar percentage={percentage} circleWidth="200" />
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
