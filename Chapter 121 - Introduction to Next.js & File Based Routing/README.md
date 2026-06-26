# Next.js - The React Framework for the Web

We're in the endgame now, fellas!<br>
The bars has been raised! We went from **"Hello, World!"** website to learning **Next.js** now.

You know that React is a UI library, right?<br>
Next.js is a whole-ass framework built on top of React.

As this chapter is only the introduction of **Next.js**, let me cover the **Why-should-I-use-Next.js** part.

---

In React, you create components, they render in the browser. The user visits your site, browser downloads your JS, and JS builds the page. That's it.

**But... There's a problem:**<br>
Google's crawler visits your site to index it. But your page is empty until JS runs. So Google sees nothing, your SEO is trash.
Also, the user sees a blank screen until all that JS loads, which means a slow first load.

With **Next.js**, it's a whole different story:<br>
Instead of the browser building the page, the server builds it first, sends ready-made HTML to the browser. User sees content instantly. Google sees content instantly. SEO isn't trash no more!

---

Remember we created a **Form app** in React and connected it to Express Backend.<br>
Frontend and Backend were running on two different servers.

In **Next.js**, one codebase covers both Frontend and Backend.<br>
One server is enough for both of them.

---

**File Based Routing**

This feature made me fall in love with **Next.js** instantly.

In React, you set up React Router manually.

In **Next.js**, you create a folder called `about` inside the `app` folder, that's it.<br>
Now, there is `/about` route in your app.

See this example:

`app/page.js` - This works as the home page. **( `/` endpoint )**
```javascript
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl">Hello, I am the HOME page!</h1>

      <Link href="/about" className="border-2 border-white m-5 px-5 py-2 rounded-sm">
        About page
      </Link>
    </div>
  )
}
```

<br>

`app/about/page.js` - This works as the about page. **( `/about` endpoint )**
```javascript
import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl">Hello, I am the ABOUT page!</h1>

      <Link href="/" className="border-2 border-white m-5 px-5 py-2 rounded-sm">
        Return to home page
      </Link>
    </div>
  )
}

export default page
```

---

**Next.js** is used by Walmart, Apple, Nike, Netflix, TikTok, Spotify... and many more.<br>
If it's a production-level app, just use **Next.js** without any questions.

Think of it as React on steroids.<br>
**Next.js** is React + a server + automatic routing + SEO, all packaged together.

This is just the introduction chapter, bruh.<br>
We'll learn more about **Next.js** in the upcoming chapters.<br>
**Buckle up for the ride ahead!**

---