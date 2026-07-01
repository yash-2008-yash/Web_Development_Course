# Auth.js

**NextAuth.js** is a library for adding authentication for Next.js applications.  
Authentication is basically asking ***"Who the hell are you?"***  
After getting authenticated, you get the entry to the app.  

The things you can do after getting in, that's a different story. That's **authorization**.  
Now, we are gonna focus on this **Authentication** part.

This is the official page of **NextAuth.js** : https://next-auth.js.org/

Now, let's create a demo app with authentication to understand what this **NextAuth.js** does.

First things first, install the **NextAuth.js** npm package:
```bash
npm install next-auth
```

---

First, I'm gonna create the demo app which is gonna have the authentication.

`app/page.js`
```javascript
"use client"
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (<>
      <div className="flex flex-col gap-2 flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-2xl">Welcome, {session.user.email}!</h1>

        <h1 className="text-xl">You are now inside my demo NextAuth app.</h1>
        <button onClick={() => signOut()} className="bg-green-700 py-1 px-7 rounded-sm">Sign out</button>
      </div>
    </>)
  }

  return (<>
    <div className="flex flex-col gap-2 flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl">Not signed in</h1>
      <button onClick={() => signIn()} className="bg-green-700 py-1 px-7 rounded-sm">Sign in</button>
    </div>
  </>)
}
```

In this, we are using the `useSession` hook to provide a session based on the user logged-in or logged-out.  
If the user is logged-in, a session is provided, and the user is gonna enter the demo app.  
If the user is not logged-in, no session is there.

---

I'm gonna use GitHub provider for this example. You know, to provide session to the user.  
GitHub is gonna handle all the session thing. You just have to include that service in the code.

`app/api/auth/[...nextauth]/route.js`
```javascript
import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ]
})

export { handler as GET, handler as POST }
```

Notice these `GITHUB_ID` and `GITHUB_SECRET`?  
Those two identify your app to GitHub so GitHub knows who's requesting entry to the app.

**NOTE:** Put these two as variables in a `.env.local` file.

This `.env` file is for storing environment variables like config values and secrets your app needs, but that shouldn't be hardcoded in your source code. For example, API keys, DB URLs, OAuth secrets like these `GITHUB_ID` and `GITHUB_SECRET`. This is a good practice. It keeps secrets out of your client-side code, and `.env.local` is gitignored by default, so it also keeps secrets out of your Git History and GitHub repository.

---

Now, I will create a component called `SessionWrapper`.

`app/components/SessionWrapper.js`
```javascript
"use client"
import { SessionProvider } from "next-auth/react"

const SessionWrapper = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default SessionWrapper;
```

And include this component in `app/layout.js`.
```javascript
import SessionWrapper from "./components/SessionWrapper";
```

And wrap the `<body>` inside the `<SessionWrapper>` component.
```javascript
<SessionWrapper>
  <body className="min-h-full flex flex-col">{children}</body>
</SessionWrapper>
```

You know that `layout.js` wraps every single page in the app, so by putting `SessionWrapper` around `<body>{children}/<body>`, you're guaranteeing every page sits inside SessionProvider, which means `useSession()` will work no matter which page you call it from, without you having to add the wrapper manually to each page.

---

Now, if you visit `http://localhost:3000/`, you can sign in using your GitHub account.  
GitHub provided you a session. And now... you enter inside the app!