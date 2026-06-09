import { useState, useRef } from 'react'

function App() {
  const [stateRenderCount, setStateRenderCount] = useState(0)
  const refRenderCount = useRef(0)

  function increaseState() {
    setStateRenderCount(c => c + 1)
  }

  function increaseRef() {
    refRenderCount.current += 1
  }

  return (<>
    <p>useState VALUE : {stateRenderCount}</p>
    <p>useRef VALUE : {refRenderCount.current}</p>

    <button onClick={increaseState}>Increase State</button>
    <button onClick={increaseRef}>Increase Ref</button>
  </>)
}

export default App;