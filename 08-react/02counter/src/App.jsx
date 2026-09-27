import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-app">
      {" "}
      <h1>Abhishek Sharma</h1> <h2>Counter Value: {counter}</h2>{" "}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add Value
      </button>{" "}
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Remove Value
      </button>{" "}
    </div>
  );
}

export default App;
