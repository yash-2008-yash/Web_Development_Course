# Chapter 115 - React Router Routing in React

Until today, we learned creating single page React apps.<br>
We only edited `App.jsx` as our primary page.<br>

We can create multi-page apps, too. Why limit yourself?

If you know the basics, you'll know that we can use the `<a>` tag to create navigation links between pages.<br>
But the thing is, it will reload the page. And we don't want that.

When we click on a component, only that should reload, not the whole damn page!<br>
And our dear **React** can solve this issue with React Router.

Let's start learning about the saviour.

## First things first, install the React Router

```bash
npm install react-router-dom
```

### Then import this in your `App.jsx`
```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
```

### Inside `App.jsx`, create this block of code inside the `App()` function:
```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /></>
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>
  },
  {
    path: "/contact",
    element: <><Navbar /><Contact /></>
  }
])
```
This is an example of `Navbar` component.<br>
When the path is `/`, `<Home />` component will load.<br>
When the path is `/about`, `<About />` component will load.<br>
When the path is `/contact`, `<Contact />` component will load.

All this works without reloading the whole page. Try it out to see the difference.

This is what `Navbar` component looks like:
```javascript
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/about"><h1>About</h1></Link>
        <Link to="/contact"><h1>Contact</h1></Link>
      </nav>
    </div>
  )
}

export default Navbar
```
Instead of `<a>` tag, we use `<Link>`.<br>
And, instead of `href` attribute, we use `to` attribute.<br>
Both are the same, basically.

**FACT:** The `<Link>` gets converted into `<a>` during the runtime.

### Then, add this inside the `return()` function:
```html
<RouterProvider router={router} />
```

This **React Router** is a big ocean.<br>
I can't explain it all. But, I can assure you that we'll use it for this "no reloading" problem. That covers pretty much of the surface.

To learn more about **React Router**: https://reactrouter.com/home

---