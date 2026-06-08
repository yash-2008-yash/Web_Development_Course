# Components, Props and  JSX in React

## JSX (JavaScript XML)

It is a syntax extension for JavaScript used in React that lets us write HTML-like code directly inside JS files.

It looks like this:
```javascript
import React from 'react'

const Hello = () => {
  return (
    <h1>Hello, World!</h1>
  )
}

export default Hello
```

## Components in React

In previous chapter, I told what are components.

They are the building blocks of a React app, like LEGO blocks.
In an app, everything is a component. Navbar is a component, Sidebar is a component, even a button can be a component.

This **"Component Structure"** makes it easy to manage our app.
Instead of our app being a 5000-line JS file, we can have our app as components, which are easy to manage and work with.

This is how a component looks in React:

`my-first-react-app/src/components/Navbar.jsx`
```javascript
import React from 'react'
import './components_css/Card.css'

const Card = ({ title = "Title of the Card", desc = "Description" }) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Card

```

We can use `Card` as many times as we want in our app without repeating HTML.
We just have to type ```<Card />``` to add a card in our app, that's it.

## Props in React

In the above component, you see `{title}` and `{desc}`. They are **Props**.

***The perfect mental model which worked for me:***
<br>
In simple terms, **Component** is a function which returns HTML-like JS code.<br>
And **Props** are the arguments we pass to the function (Component).<br>
If we don't pass **Props** value, default value will be taken.

That's it. This is **Components** and **Props** basically.