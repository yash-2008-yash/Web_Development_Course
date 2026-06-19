import { useState } from "react";
import Navbar from "./components/Navbar";
import { countContext } from "./context";

function App() {

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (<>
    <countContext.Provider value={count}>
      <Navbar />

      <h1>Count:{count}</h1>
      <h4 onClick={increaseCount}>Increase Count</h4>
    </countContext.Provider>
  </>)
}

export default App;