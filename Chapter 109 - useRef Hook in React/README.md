# `useRef` Hook in React

We know that React normally controls everything through JSX.<br>
You write `<input />`, React creates it.

But sometimes you need to directly touch that input, not through React, so you can grab the actual thing in the browser and do something to it manually.
`useRef` is just how you get a handle on that element.

```javascript
const inputRef = useRef(null)   // Create the handle
<input ref={inputRef} />        // Attach it to the element
inputRef.current                // Now, you can do anything with this
```

Once you have `inputRef.current`, you can do stuff like:

```javascript
inputRef.current.focus()           // Focus on it
inputRef.current.scrollIntoView()  // Scroll to it
inputRef.current.offsetWidth       // Get its width in pixels
```

---

I got a question in my mind: ***"So, React can't do DOM manipulation?"***<br>
Yes, it absolutely can. But... only to an extent.

React can do most of the DOM things through `Props` and `State`. Like, it can:
```javascript
<input disabled={true} />         // Disable it
<input style={{ color: 'red' }}   // Style it
<input value={name} />            // Control its value
```

But some things just don't exist as React props.<br>
For example, `.focus()`, `.play()`, `.scrollIntoView()`, `.offsetWidth` doesn't exist as React props. 

The browser has these methods but React doesn't.<br>
To access those through React, you need `useRef`.

Let's see an example using this `.scrollIntoView()`.
```javascript
import { useRef } from 'react'

function App() {
  const bottomRef = useRef(null)

  function scrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (<>
    <button onClick={scrollToBottom}>Scroll to bottom</button>

    <div style={{ height: '1000px' }} />

    <div ref={bottomRef}>You made it to the bottom!!!</div>
  </>)
}

export default App;
```

## The most important usage of `useRef`

The most used feature of `useRef` isn't DOM manipulation.<br>
I just added it in the beginning because it's easier to understand.<br>
You'll get your brain fried when you see the most important usage of `useRef`.<br>
And, I didn't want your brain get fried in the beginning itself.<br>
So, hold your brains tight and try to understand this **"most important usage of `useRef`"**.

It is to **store a value that should survive re-renders, but whose changes should not update the UI.**

In simple terms, `useState` re-renders the component when the state changes.<br>
But, when we don't want the component to re-render when the state changes, we use `useRef`.

This following example made me understand `useRef`:
```javascript
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
```

I created two buttons. One to increase the value of `stateRenderCount`, and another one to increase the value of `refRenderCount`.<br>
When we press `Increase State` button, we can see the `stateRenderCount` increase.<br>
But when we press `Increase Ref` button, it doesn't increase.<br>

Now, press the `Increase State` button again, you will see the increment in `refRenderCount`.<br>
I thought **"Why was this count hiding all this time?"**

That's because `useState` re-renders the component every time the state changes, but `useRef` doesn't.<br>
`useRef` increases the value, but doesn't re-render. That's why we don't see the `refRenderCount` increasing in he browser.<br>
When we press the `Increase State` button, we see `refRenderCount` increased out of nowhere.<br>
That's because when `Increase State` triggers re-rendering, the value of `refRenderCount` is stored, so it is displayed.

This is that main usage: **store a value that should survive re-renders, but whose changes should not update the UI.**

`useRef` shines when you're storing behind-the-scenes data that your code needs, but your UI doesn't.<br>
That's the real-world use case.

If `useState` and `useRef` seems the same and you are confused, think about this mental model:
- If the user should see it, `useState` should be used
- If the user shouldn't see it, but code needs to remember it, `useRef` should be used.

**Simple as that**.

---