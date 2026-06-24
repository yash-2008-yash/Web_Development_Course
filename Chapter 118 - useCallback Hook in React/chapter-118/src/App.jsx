import { useState, useCallback } from "react";
import DisplayCount from "./components/DisplayCount";
import DisplayBinary from "./components/DisplayBinary";

function App() {

  const [count, setCount] = useState(0);
  const [binary, setBinary] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count => count + 1)
  }, [])

  const changeBinary = useCallback(() => {
    setBinary(binary => (binary === 0) ? 1 : 0)
  }, [])

  return (<>
    <DisplayCount count={count} />
    <button onClick={incrementCount}>Increase Count</button>

    <DisplayBinary binary={binary} />
    <button onClick={changeBinary}>Toggle Binary</button>
  </>)
}

export default App;