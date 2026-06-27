# Server Components in Next.js

In Next.js, there are two types of components: **Server Components** and **Client Components**  
By default, every component in Next.js, is a **Server component**.

Let me show you the difference first.

## Server Components

- These components run on the server.
- These component needs nothing to run, as it's the default.
- You can't use React hooks like `useState`, `useEffect`, etc. because those are made for browser.
- You can't handle events using `onClick`, `onMouseEnter`, etc. because those are also made for the browser, not for the server.
- These components can directly do `async/await` to fetch data.
- Server component code is never sent to the browser. 
- These components are used when the component is just displaying static content, fetching data, isn't involved in the interactivity of the app.

## Client Components

- These components run in the browser.
- These component needs `"use client"` at the top.
- You can use React hooks like `useState`, `useEffect`, etc. as the client components run on the browser itself.
- You can handle events using `onClick`, `onMouseEnter`, etc.
- These components can't access DB directly.
- Server component code is never sent to the browser. 
- These components are used for buttons, forms, anything interactive.  

<br>

Okay, let's cut this "theory" shit and lemme show you an example:

Imagine there is a blog page, which consists of the blog and like count.  
In this, "blog" content is the static part. You don't interact with it. Just plain data. So, this should be a server component.  
On the other hand, the like button is something you interact with. So, obviously it should be a client component.  

`page.js`
```javascript
import LikeButton from "./components/LikeButton";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-5xl font-bold">BLOG POST</h1>
      <div className="blog px-40 py-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta distinctio expedita alias facere ducimus vel adipisci voluptate temporibus? Repellendus esse doloremque placeat veniam saepe ducimus ratione accusantium qui beatae ex. Alias hic culpa consequuntur libero ut, porro repellat ducimus quos nesciunt voluptatum placeat rem illum dolorem delectus soluta obcaecati quisquam totam molestias dolorum quaerat quas consectetur eveniet? Fugit debitis eos, eaque earum repellendus enim quibusdam voluptatem numquam dicta quia omnis possimus obcaecati porro itaque, vel aliquid, nam beatae! Deleniti magni autem perspiciatis voluptates modi fuga sapiente id ipsam quidem deserunt numquam alias voluptatem quibusdam architecto corporis, hic quod, odio obcaecati dolorum quam nesciunt assumenda recusandae fugit repellendus. At corrupti numquam, consequuntur doloribus dolor dolorem veritatis laudantium nisi excepturi eius beatae voluptatum tempore, officiis quasi eos, unde eaque? Praesentium iste, fugit expedita aspernatur earum corporis accusantium iusto voluptates impedit, aliquid laudantium consectetur temporibus sequi! Repellendus optio in ea libero neque obcaecati aspernatur dignissimos inventore ipsum, repudiandae ad dolores alias at veritatis cum labore vel quae recusandae sit quisquam eaque beatae ipsa nobis. Impedit laborum ullam illum, quaerat laudantium porro repellat molestias delectus optio eveniet. Perferendis laborum repellat nam labore. Minus voluptas, dolorem quae iste consectetur consequatur obcaecati perferendis quas nisi.</p>
      </div>

      <LikeButton />
    </div>
  );
}
```

<br>

`LikeButton.jsx`
```javascript
"use client"
import { useState } from 'react'

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0)
  return (<>
    <button onClick={() => { setLikeCount(likeCount + 1) }} className='bg-red-600 font-bold px-5 py-2 rounded-sm'>
      LIKES: {likeCount}
    </button>
  </>)
}

export default LikeButton
```

You can merge both server and client components easily. That's the point of using **Next.js**.  
You can handle both frontend and backend simultaneously.

One thing to make sure is that you should add `"use client"` at the top of a client component.  
Or else, it would be a server component, by default.

---

If you didn't understand this whole thing, do one thing:

Make a counter app. The usual `useState` way.  
You might think it will work. Nah, bro, it won't.  

`useState` is for frontend side, it doesn't work in the server side.  
And the component is a server component, by default.

If you have to use `useState`, it should be a client component.  
You can just add `"use client"` at the top of the component and you're good to go.

This is the difference between **Server components** and **Client components**.

---