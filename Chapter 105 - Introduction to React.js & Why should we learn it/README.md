# Introduction to React.js

It is a famous JS Library used to build user interfaces (UIs).
Instead of manually creating and updating HTML pages React lets us build websites using **components**.

__Components__ are basically like LEGO blocks.
In a React app, everything is a component.
Navbar is a component, Sidebar is a component, even a button can be a component.
Components combined is a React app.

## Why should you learn React? *(The most important question)*

- [X] **You see React based in your everyday-life.**

  Most of the modern websites like **Netflix, Instagram, WhatsApp Web** use React for their UI. React is one of the most demanding front-end skills.

- [X] **Debugging and managing becomes a cake-walk**

  Your React app will be divided into components like `Navbar.js`,`Sidebar.js`,`Card.js`,etc. instead of a 5000-line JS file. If something is wrong in your app, you know where exactly to find the error.

- [X] **Money-Money-Money**

  You'll get job opportunities based on React. A huge percentage of front-end job opportunities ask for HTML, CSS, JavaScript, React. Learning React makes your resume much more stronger.

- [X] **Increased Reusability & Decreased Redundancy**

  We can use components again and again without rewriting HTML. So, redundancy of code decreases, which leads to faster development.

- [X] **Opens door to Full-Stack**

  To become a **MERN Stack developer**, you need React, obviously. It is one of the most popular web dev stacks.

## Comparison between using React and not using React

Let's take an example of Counter app with a button.

### WITHOUT REACT
```javascript
document.getElementById("btn").addEventListener("click", () => {
      let count = parseInt(document.getElementById("counter").innerHTML)
      document.getElementById("counter").innerHTML = count + 1;
    })
```
Without using React, we have to undergo this `addEventListener`, `getElementById`, blah, blah, blah. The code will become a spaghetti code. But with React, it's much better.

### WITH REACT
```javascript
function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <div className='value'> {value}</div>
      <button onClick={()=>{setValue(value + 1)}}>Click me!</button>
    </div>
  );
}
```
Ignore the `useState` and any other new words because we'll learn it in upcoming chapters.
Now, by comparing both codes, we can see that by using React, we escape that `addEventListener`, `getElementById` mess.

---

This is just the introduction of React. We'll learn more deeply soon...

**Yashwanth M**, signing off... for now.

---