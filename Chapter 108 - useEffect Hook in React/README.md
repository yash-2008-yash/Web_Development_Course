# `useEffect` Hook in React

useEffect lets us run code after a component renders.

This topic is so messy that no definition can help you to understand.
Even if you understood, you would be like:<br>
*"For this, we need `useEffect`? It's so useless! Why should I use it when I can do the task without it?"*

So, lets jump to examples, which is easier to grasp.

Lets build a React app which displays window width and window height.<br>
When the window is resized, the dimensions should also change.<br>
**LETS DO THIS!**

### Without using `useEffect`

```javascript
import { useState } from "react";

function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  })
  console.log("EVENT LISTENER ADDED")

  return (
    <>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </>
  )
}

export default App;
```
Resize the window and check the console.<br>
You will see 1000+ event listeners in the console, which is a BAD thing.<br>
Every time the dimensions changes, it triggers `addEventListener`.<br>
We don't need that many `addEventListener`.

### With `useEffect`

```javascript
import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  return (
    <>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </>
  );
}

export default App;
```
Now resize the window and check the console again.<br>
This time, you will see only one `addEventListener` added **(or two in development due to React Strict Mode)**.<br>

Because the code inside `useEffect` does not run on every render.<br>
The empty dependency array ([]) makes React run the effect only once when the components loads.

This saves so much resources which gets wasted when we don't use `useEffect`.

## `useEffect` patterns

There are basically 3 common `useEffect` patterns:

- `useEffect(() => {})` : Runs after every re-render <br>
- `useEffect(() => {}, [])` : Runs only on the mount <br>
- `useEffect(() => {}, [value])` : Runs on mount + when value changes <br>

Let's see examples for each:

---

`useEffect(() => {})`
```javascript
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count:${count}`
  });

  function addCount() {
    setCount(c => c + 1)
  }

  function subtractCount() {
    setCount(c => c - 1)
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
    </>
  );
}

export default App;
```
This app is a counter **(both increment & decrement)**.

In `useEffect` code, we update the title of the page every time the component is rendered.

---

`useEffect(() => {}, [])`
```javascript
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count:${count}`
  }, []);

  function addCount() {
    setCount(c => c + 1)
  }

  function subtractCount() {
    setCount(c => c - 1)
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
    </>
  );
}

export default App;
```
This app is a counter **(both increment & decrement)**.

In `useEffect` code, we update the title of the page.<br>
However, because of the empty dependency array ([]), the code inside `useEffect` runs only once when the component is first rendered.

So, the page title is initially set to: `Count:0`

After that, even if the count changes, the `useEffect` code will not run again.<br>
As a result, the counter value updates correctly on the page, but the title remains unchanged.

---

```javascript
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("green")

  useEffect(() => {
    document.title = `${count} & ${color}`
  }, [count]);

  function addCount() {
    setCount(c => c + 1)
  }

  function subtractCount() {
    setCount(c => c - 1)
  }
  function changeColor() {
    setColor(c => c === "green" ? "red" : "green")
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button >
      <button onClick={subtractCount}> Subtract</button > <br></br>
      <button onClick={changeColor}>Change color</button>
    </>
  );
}

export default App;
```
This app has two state variables: `count` and `color`.

In the `useEffect` code, we update the title of the page using both values.<br>
However, the dependency array contains only count. i.e. `[count]`

This means the `useEffect` code will run when the component is first rendered and whenever the count value changes.

If we click 'Add' or 'Subtract', the count changes, so the page title is updated.

However, if we click 'Change color', only the color changes.
Since color is not included in the dependency array, `useEffect` will not run again.

As a result, the text color changes on the page, but the page title remains unchanged until the count is changed.

---