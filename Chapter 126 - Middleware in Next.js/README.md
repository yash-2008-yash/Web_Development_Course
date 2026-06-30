# Middleware in Next.js

We talked about Middleware in Express.js in chapter 90.  
It's the same concept, but in Next.js terms, that's it.

In Chapter 90, I told something like this:
```
Middleware is a function that is present between a user’s request and the final response in a server application.

In Express.js, middleware can:

- read or modify the request
- decide whether the request should continue
- stop it and send a response
- or pass control to the next step

A request doesn’t go straight to the page.
It passes through checkpoints (middleware).
Each checkpoint can inspect, allow, block, or change it.
```

It's like a security guard. Unlike humans, this guard will be on 24/7.  

See this example for understanding easily:  
Imagine your app is under maintenance.  
You have to show a message like **"Under maintenance, try visiting after some time."**  
Some assholes will try to mess with the URL. Like adding `/dashboard` at the end of URL, etc.  
Next.js will render that page, actually.

Without middleware, anyone can just type `/about` and be done with it.  
Middleware stops the request even before Next.js tries to render it.

<br>

`app/page.js`
```javascript
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl">Under maintenance. Try visiting after some time.</h1>

    </div>
  )
}
```

<br>

`middleware.js`
```javascript
import { NextResponse } from 'next/server'

export function middleware(request) {
  if (request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
```

Now, even if you try adding `/about` or `/dashboard`, you'll get redirected to `/` page.  
No asshole can cross the maintenance boundary.

This is **Middlware** in Next.js.

---

**NOTE:** Next.js renamed middleware.js to proxy.js because the term "middleware" was confused with Express.js middleware, so newer Next.js versions use the proxy file convention instead, though there's a codemod to migrate. If you're on Next.js 15 or below, it's still middleware.js.

Don't think that the given example is outdated or something.  
The only thing that changes in Next.js 16+ is the file name and the export function name. The behavior is essentially the same.

| Next.js Version | File            | Function                       |
| --------------- | --------------- | ------------------------------ |
| 15 and below    | `middleware.js` | `export function middleware()` |
| 16 and above    | `proxy.js`      | `export function proxy()`      |

That's it. A slight difference.

---