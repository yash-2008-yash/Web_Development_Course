# Event Handling in React

In Vanilla JS, we had `addEventListener` for event handling.<br>
In React JS aka JSX, we can pass event handler functions as props to a JSX tag.<br>
When that JSX tag is triggered by some events, that event handler function will get executed.

Let's see some common events we use in our "Dev Life".

---

`onClick` - This gets triggered when the linked JSX tag is clicked.
```javascript
import { useState } from 'react'

function App() {
  const [clickMessage, setClickMessage] = useState("Touch me and you'll see who I am!")

  const handleClick = () => {
    setClickMessage("I am a button.")
  }

  return (<>
    <button onClick={handleClick}><h1>{clickMessage}</h1></button>
  </>)
}

export default App
```

---

`onDoubleClick` - This gets triggered when the linked JSX tag is double clicked.
```javascript
import { useState } from 'react'

function App() {
  const [doubleClickMessage, setDoubleClickMessage] = useState("Don't double click me, you a-hole!")

  const handleDoubleClick = () => {
    setDoubleClickMessage("How dare you??? You touched me. TWICE!")
  }

  return (<>
    <button onDoubleClick={handleDoubleClick}><h1>{doubleClickMessage}</h1></button>
  </>)
}

export default App
```

---

`onHover` - This gets triggered when the mouse is hovered on the linked JSX tag.

I'm sad to break this news to you, but there is no thing like `onHover` in React.<br>
You can't handle the 'hover' event, sadly. So, forget about adding hover effects in your React app.

Okay, I was just kidding with ya. You don't have to forget about hover effects.<br>
You can use `onMouseEnter` and `onMouseLeave` to handle hover effects.

In React, "hover" isn't really a single event at the browser level. It's a combination of two events, mouse entering an element and mouse leaving it. So React exposes those two separately.

```javascript
import { useState } from 'react'

function App() {
  const [mouseEnterMessage, setMouseEnterMessage] = useState("Don't bring your cursor towards me!")
  
  const handleMouseEnter = () => {
    setMouseEnterMessage("Get your fucking cursor out of me!")
  }

  const handleMouseLeave = () => {
    setMouseEnterMessage("Don't bring your cursor towards me!")
  }

  return (<>
    <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><h1>{mouseEnterMessage}</h1></button>
  </>)
}

export default App
```

---

`onChange` - This gets triggered when the value is changed in the linked JSX tag.

This is one of the important events you need to learn because you need this for `<input>` tag.<br>
And you know that `<input>` is literally... everywhere, right?

```javascript
import { useState } from 'react'

function App() {
  const [form, setForm] = useState({ email: "", phone: "" })

  return (<>
    <input type='text' name='email' value={form.email} />
    <input type='text' name='phone' value={form.phone} />
  </>)
}

export default App
```
You might think this is okay.<br>
But, try typing something in the input box, you can't.<br>
Because, it is fixed as "" and you need to handle the change using events.<br>
That's why I told you `onChange` is mandatory for `<input>`.

Now, see how it is done.

```javascript
import { useState } from 'react'

function App() {
  const [form, setForm] = useState({ email: "", phone: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  return (<>
    <input type='text' name='email' value={form.email} onChange={handleChange} />
    <input type='text' name='phone' value={form.phone} onChange={handleChange} />
  </>)
}

export default App
```

---

`onSumbit` - This gets triggered when a form is submitted.

```javascript
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>

      {submitted && <p>Hello, {submitted}!</p>}
    </div>
  );
}

export default App
```

---

`onFocus` & `onBlur` - It gets triggered when an input gains/loses focus.

```javascript
import { useState } from "react"

function App() {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState("")

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (<>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} placeholder="Fill me..." style={{ border: isFocused ? "2px solid blue" : "1px solid gray" }} />

    {isFocused && <p>Yeah, take your time, you dumbf**k. TYPE SOONER!</p>}
  </>)
}

export default App
```

---

`onKeyDown` - It gets triggered when a key is pressed down

It's useful for keyboard shortcuts or detecting 'Enter' key.

```javascript
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
```
---

These are the most used events.<br>
You can learn more, tho. But you need to master these absolutely.

---