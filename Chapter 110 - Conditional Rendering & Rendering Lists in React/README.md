# Conditional Rendering in React & Rendering Lists in React

## Conditional Rendering

In programming, we use `if-else` statements, remember?<br>
We are going to use the same concept, but in React style.

Using conditional rendering, we can render a component based on conditions.

There are mainly 4 types of conditional rendering:
- `if` statement
- Ternary Operator `? :`
- Short-Circuit `&&`
- Object Lookup (enum pattern)

As usual, let's see an example for each:

---

1. `if` statement
```javascript
import { useState } from 'react'
import './App.css'

function App() {
  const [plan, setPlan] = useState('Premium Plan')
  const [message, setMessage] = useState("")


  function changeToPremiumPlan() {
    if (plan === 'Free Plan') {
      setPlan('Premium Plan')
      setMessage("Changed to Premium plan successfully!")
    } else {
      setMessage("You are already using Premium plan.")
    }
  }

  function changeToFreePlan() {
    if (plan === 'Premium Plan') {
      setPlan('Free Plan')
      setMessage("Changed to Free plan successfully!")
    } else {
      setMessage("You are already using Free plan.")
    }
  }

  return (<>
    <div>Your Subscription: {plan}</div>

    <button className='button1' onClick={changeToPremiumPlan}>Pay for premium plan!</button>
    <button className='button2' onClick={changeToFreePlan}>Cancel your subscription!</button>

    <div className='msg'>{message}</div>
  </>)
}

export default App
```

In this example, I used `if` and `else` statements to render component.<br>
This is **Conditional rendering using `if` and `else`**.

---

2. Ternary Operator `? :`

I'll use the above example itself.<br>
I will replace `if` and `else` with Ternary operator.

```javascript
import { useState } from 'react'
import './App.css'

function App() {
  const [plan, setPlan] = useState('Premium Plan')
  const [message, setMessage] = useState("")


  function changeToPremiumPlan() {
    plan === 'Free Plan'
      ? (setPlan('Premium Plan'), setMessage("Changed to Premium plan successfully!"))
      : setMessage("You are already using Premium plan.")
  }

  function changeToFreePlan() {
    plan === 'Premium Plan'
      ? (setPlan('Free Plan'), setMessage("Changed to Free plan successfully!"))
      : setMessage("You are already using Free plan.")
  }

  return (<>
    <div>Your Subscription: {plan}</div>

    <button className='button1' onClick={changeToPremiumPlan}>Pay for premium plan!</button>
    <button className='button2' onClick={changeToFreePlan}>Cancel your subscription!</button>

    <div className='msg'>{message}</div>
  </>)
}

export default App
```

This is same as `if` and `else` statements, but syntax is a little different.<br>
If you don't know anything ternary operator, revise your basics, man!<br>
Don't be the guy who wants to learn React, but don't know what ternary operator is.

**NOTE:** In ternary operators, if you want to execute more than one expressions, you need to wrap them in parantheses () and separated by commas(,).

---

3. Short-Circuit `&&`

```javascript
import { useState } from 'react'
import './App.css'

function App() {
  const [isLoggedIn] = useState(false)

  return (<>
    {isLoggedIn && <h1>WELCOME, USER!</h1>}
  </>)
}

export default App
```
This is a simple example.<br>
We use `&&` in conditional rendering in scenarios like:<br>
**if the condition is `true`, show this component, and if the condition is `false`, then show nothing.**

Simple as that. No rocket science involved.

---

4. Object Lookup (enum pattern)

```javascript
import './App.css'

const statusUI = {
  placed: <p>Order placed! We'll send it ASAP.</p>,
  shipped: <p>Out for delivery!</p>,
  delivered: <p>Delivered! Enjoy.</p>,
}

function OrderStatus({ status }) {
  return (
    <div>
      <h2>Your Order</h2>
      {statusUI[status] ?? <p>Unknown status</p>}
    </div>
  );
}

function App() {
  return <OrderStatus status='placed' />;
}

export default App
```
When you have 3+ cases based on a single value, a lookup object is recommedned than a chain of ternaries or a switch.


**NOTE:** `??` is used as a safety measure. If status is some unknown value, it returns null instead of crashing.

## Rendering Lists in React

In React, **rendering lists** means displaying multiple UI elements on the screen by converting an array of data into JSX elements.

Imagine you have this data:
```javascript
const movies = [
  "Interstellar",
  "Inception",
  "The Dark Knight",
  "Tenet"
];
```
And you want to display all these movies on the screen.<br>
You can do this:

```javascript
function App() {

  return (
    <>
      <h2>Interstellar</h2>
      <h2>Inception</h2>
      <h2>The Dark Knight</h2>
      <h2>Tenet</h2>
    </>
  );
}
```
Happy ending, right? **BULLSHIT!!!**<br>
What if the data had 1000 movies, you'd still use this? Nah, you're better than this!<br>
That's why **Rendering Lists** exist.

```javascript
function App() {
  
  return (
    <>
      {movies.map(movie => (
        <h2>{movie}</h2>
      ))}
    </>
  );
}
```
Now, even if you have 10,000 of movies, no worries. This is rendering lists in React.

Let's see an example to lock-in the concept.<br>
Imagine you're making your portfolio website and fetched your GitHub repos.
```javascript
const [repos] = useState([
  { id: 1, name: "Twitter UI Clone", stars: 69 },
  { id: 2, name: "Web Development Course", stars: 98 },
  { id: 3, name: "College Code Archive", stars: 32 }
])
```

Now, its **RENDERIN' TIME**!!!

```javascript
import { useState } from "react";
import './App.css';

function App() {
  const [repos] = useState([
    { id: 1, name: "Twitter UI Clone", stars: 69 },
    { id: 2, name: "Web Development Course", stars: 98 },
    { id: 3, name: "College Code Archive", stars: 32 }
  ])

  return (<>
    {repos.map(repo => (
      <div key={repo.id} className="box">
        <h1>{repo.name}</h1>
        <p>{repo.stars} Stars</p>
      </div>
    ))}
  </>)
}

export default App;
```

**NOTE:** You need to give an unique ID to every element. IT'S MANDATORY!

That's because ithout unique IDs, React gets confused and lead to bugs.<br>
The `key` is React's version of a roll number. It helps React track each item across re-renders efficiently.

---