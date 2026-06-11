import { useState } from 'react'

function App() {
  const [clickMessage, setClickMessage] = useState("Touch me and you'll see who I am!")
  const [mouseEnterMessage, setMouseEnterMessage] = useState("Don't bring your cursor towards me!")
  const [key, setKey] = useState("")


  const handleClick = () => {
    setClickMessage("I am a button.")
  }

  const handleMouseEnter = () => {
    setMouseEnterMessage("Get your fucking cursor out of me!")
  }

  const handleKeyDown = (e) => {
    setKey(e.key)
  }
  return (<>
    {/* onClick EVENT */}
    <button onClick={handleClick}><h1>{clickMessage}</h1></button>

    <br /><br />

    {/* onMouseEnter EVENT */}
    <button onMouseEnter={handleMouseEnter}><h1>{mouseEnterMessage}</h1></button>
    
    <br /><br />

    <input type="text" onKeyDown={handleKeyDown} />
    <h2>You pressed: {key}</h2>
  </>)
}

export default App
