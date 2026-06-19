import { useState, useMemo } from "react";

function slowSquare(num) {
  for (let i = 0; i < 1000000000; i++) {
    // This creates a fake delay
  }
  return num * num;
}

function App() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const squared = useMemo(() => slowSquare(number), [number]); // Expensive Computation

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (<>
    <h2>Square of {number} is {squared}</h2>
    <button onClick={() => setNumber(number + 1)}>Change Number</button>

    <h1>Count: {count}</h1>
    <button onClick={increaseCount}>Increment</button>
  </>)
}

export default App;