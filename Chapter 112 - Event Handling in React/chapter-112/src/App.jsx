import { useState } from "react"

function App() {
  const [text, setText] = useState("")
  const [submitted, setSubmitted] = useState("")

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSubmitted(text)
      setText("")
    }

    if (e.key === "Escape") {
      setText("")
    }
  }

  return (<>
    <h3>Press "Enter" to submit</h3>
    <h3>Press "Esc" to clear</h3>
    
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} />

    {submitted && <p>Submitted: {submitted}</p>}
  </>)
}

export default App