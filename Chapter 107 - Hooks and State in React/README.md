# Hooks and State in React

## State

Before hooks, we need to understand what is **state**.<br>
In React, state is data that belongs to a component and can change over time.<br>
When state changes, React re-renders that component and updates the UI.

**For example, in YouTube, "Like" button has state, the like count.**<br>
When you click it, the count changes, the UI updates. That's state in action.

## Hooks

**Hooks** are special functions in React that lets us use features like state and lifecycle, all from inside a regular function component.

Don't panic seeing this new word **lifecycle**.
We'll learn it in the upcoming chapters.

**NAMING RULE:** Hooks always start with the word `use`.
`useState`, `useEffect`, etc. are some of the hooks. There are many more.

## A good example to understand these both

This is a React app for a counter.

```javascript
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Click me!</button>
    </>
  )
}

export default App
```

In this example,
- `count` is the current **state** variable. It holds the current value.
- `setCount` is the **setter function** to update the **state**. When you call it like `setCount(5)` or `setCount(count + 1)`, React re-renders the component with the new value.
- `useState(0)` is the **hook** here. 0 is the initial value which means when the component first loads, count starts t 0.

---

If you really are locked-in and interested, you would get a question.

***"Why can't we just do this, instead?"*** :
```javascript
function App() {
  
  let count = 0;

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => { count = count + 1 }}>Click me!</button>
    </>
  )
}

export default App
```

Ever heard "Our brain fools us, sometimes." This is one of those "sometimes".

**Yeah, I don't blame ya. Many beginners, even me, had the same doubt.**<br>
When we run `App.jsx`, there is no error, but UI doesn't update.<br>
So, our counter app won't update the count, no matter how mnay times you click.

Thats because every time React re-renders a component, it calls the `App()` function again from scratch. So `let count = 0` resets back to 0 on every render.

Also, just doing `count = count + 1` doesn't even tell React anything changed. React has no idea that the variable is updated, so it won't re-render the UI at all. The screen just stays the same. That's why the app won't update the count.

And that's why... **hooks** exist.

---
