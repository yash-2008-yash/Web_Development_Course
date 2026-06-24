# `useCallback` Hook in React

This hook memoizes a function and re-creates it only when the given dependencies change.

`useMemo` memoizes a value, and `useCallback` memoizes a function.<br>
If you understand one concept, consider that you understood both concepts, because they both are very much similar.

We know that React re-renders a component when state changes.<br>
We should also know When a component re-renders, all the functions inside it are re-created.

Most of the time this is completely fine.

But, when we pass a function as a prop to another component, React sees it as a new function every render.<br>
This can cause unnecessary re-renders.

For this, we use `useCallback`.

Here comes an example to enlighten your brain:

---

`App.jsx`
```javascript
import { useState } from "react";
import DisplayCount from "./components/DisplayCount";
import DisplayBinary from "./components/DisplayBinary";

function App() {

  const [count, setCount] = useState(0);
  const [binary, setBinary] = useState(0);

  const incrementCount = () => {
    setCount(count => count + 1)
  }

  const changeBinary = {
    setBinary(binary => (binary === 0) ? 1 : 0)
  }

  return (<>
    <DisplayCount count={count} />
    <button onClick={incrementCount}>Increase Count</button>

    <DisplayBinary binary={binary} />
    <button onClick={changeBinary}>Toggle Binary</button>
  </>)
}

export default App;
```

<br>

`DisplayCount.jsx`
```javascript
const DisplayCount = ({ count }) => {

  console.log("DisplayCount rendered!")

  return (
    <div>
      <h1>Current Count: {count}</h1>
    </div>
  )
}

export default DisplayCount
```

<br>

`DisplayBinary.jsx`
```javascript
const DisplayBinary = ({ binary }) => {

  console.log("DisplayBinary rendered!")

  return (
    <div>
      <h1>Current Binary: {binary}</h1>
    </div>
  )
}

export default DisplayBinary
```

In this example, there are two states `count` and `binary`.<br>
I created two components to display each of these states, `DisplayCount` and `DisplayBinary`<br>
Also, there are two setter functions to change the states, `incrementCount` and `changeBinary`.

All is good.<br>
We have a counter and a binary toggler.<br>

But, if you see clearly, you'll know that `DisplayCount` and `DisplayBinary` are not at all related.<br>
They have two different states. But, if you check the console, you'll see that both the components gets re-rendered even if only one state changes.<br>
That's because everytime any one of the state changes, React re-renders the whole `App` component, so all the functions inside it, are re-created.<br>
If another component has that function as a prop, it means that every time the state changes, the component gets a new function as a prop, even though it's still the old function.

This can cause unnecessary re-renders.<br>

Let's prevent this using `useCallback` Hook.

`App.jsx`
```javascript
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
```
Only adding `useCallback` to the functions isn't enough.<br>
We have to wrap the components in `memo()`.

`DisplayCount.jsx`
```javascript
import { memo } from "react"

const DisplayCount = memo(({ count }) => {

  console.log("DisplayCount rendered!")

  return (
    <div>
      <h1>Current Count: {count}</h1>
    </div>
  )
})

export default DisplayCount
```

<br>

`DisplayBinary.jsx`
```javascript
import { memo } from "react"

const DisplayBinary = memo(({ binary }) => {

  console.log("DisplayBinary rendered!")

  return (
    <div>
      <h1>Current Binary: {binary}</h1>
    </div>
  )
})

export default DisplayBinary
```

Now, if you check the console, the components get re-rendered only when their specific state changes, not on every state-change.<br>
This saved us so many unnecessary renders, right?

This is why we use `useCallback`.

---