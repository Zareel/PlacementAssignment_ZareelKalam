import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div>
        <h1 className="heading">Counter App</h1>

        <div
          onClick={() => setCounter(counter === 10 ? counter : counter + 1)}
          className="symbol"
        >
          +
        </div>
        <div className="number">{counter}</div>
        <div
          onClick={() => setCounter(counter === 0 ? counter : counter - 1)}
          className="symbol"
        >
          -
        </div>
      </div>
    </div>
  );
}

export default App;
