# `useMemo` Hook in React

This hook memoizes a value and re-calculates it only when the given dependencies change.<br>
*(yes, its **memoizes** not **memorizes**)*.

We know that React re-renders a component when state changes.<br>
But, when we have a heavy-task (aka **Expensive Computation**) and we want it to run only when a specific thing changes, not on every render.<br>
On every re-render, React gives you the cached value instead of recomputing it.

Because this **"Expensive Computation"** slows down the tab, which makes your app a shit-show.<br>
For this, we use `useMemo`.

As usual, let's see an example to lock-in the concept.

---

⚠️ Run this code with caution because it'll slow down your tab for a while.
```javascript
import { useState } from "react";

function slowSquare(num) {
  for (let i = 0; i < 1000000000; i++) {
    // This creates a fake delay
  }
  return num * num;
}

function App() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const squared = slowSquare(number); // Expensive Computation

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
```

This example app is a simple counter app.<br>
It also calculates square of a number.

But, the catch is the square calculating function has a fake delay in it to stimulate expensive computation. It will slow the app down.

That's because React re-renders it every time, and that **Expensive Computation** also gets re-rendered every time. Automatically, your app becomes slow.

The counter part of the app didn't do anything wrong, but it also gets slow.<br>
If you run the code by youself, you'll see it with your own eyes.

Let's prevent this using `useMemo` Hook.

```javascript
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
```

Take a clean look at the syntax:
```javascript
const squared = useMemo(() => slowSquare(number), [number]); // Expensive Computation
```
In the dependency list `[]`, I added `number`.<br>
Now, this so-called "Expensive Computation" only happens when the `number` changes. Not on every re-render.<br>
Now, the counter part of the app will work just fine without any lagging.

This is `useMemo`, basically.

Also, I wanna tell you an important thing:

**`useMemo` is becoming optional in React 19.
With the release of React 19, the manual use of `useMemo` (and `useCallback`) is no longer mandatory for most performance optimizations.  This shift is driven by the introduction of the React Compiler, a build-time tool that automatically handles memoization.**

**But learning `useMemo` isn't a waste of time, tho.<br>
Having a basic idea of what `useMemo` is a good thing.**

---