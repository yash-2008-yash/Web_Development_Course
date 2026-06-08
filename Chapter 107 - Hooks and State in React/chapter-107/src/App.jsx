import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // 'count' is the current state value
  // 'setCount' is the setter function to update it
  // 'useState(0)' initializes the state with 0

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Click me!</button>
    </>
  )
}

export default App