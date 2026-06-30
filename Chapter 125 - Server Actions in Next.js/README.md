# Server Actions in Next.js

If we want to send data to the server-side component, we use **Route Handling** or **API fetching**, but we don't have to do that everytime. We have another simple method. It's called **Server Actions**.

For example, there is a form:

```javascript
export default function Home() {

  return (<>
    <div className="m-auto">
      <form className="flex gap-2">
        <input name="name" placeholder="Enter your name" className="border border-white p-1 rounded-sm" />
        <button type="submit" className="bg-purple-600 px-5 py-1 rounded-sm">Submit</button>
      </form>
    </div>
  </>)
}
```

On submit, nothing happens because there isn't any function defined to handle that.  
Let's use this **Server Action** method of making it work.

```javascript
async function greetUser(form) {
  'use server'
  const name = form.get("name")
  console.log(`Hello, ${name}!`)
}

export default function Home() {

  return (<>
    <div className="m-auto">
      <form action={greetUser} className="flex gap-2">
        <input name="name" placeholder="Enter your name" className="border border-white p-1 rounded-sm" />
        <button type="submit" className="bg-purple-600 px-5 py-1 rounded-sm">Submit</button>
      </form>
    </div>
  </>)
}
```

This async function `greetUser()` will run on the backend (server-side) because `'use server'` is used here. No need of API fetching, no need of routing.

**NOTE:** Even though this method is time-saving and easy for us, this isn't recommended in production-code. This method is best for local development. You have to write way less boilerplate code, speed development process, etc.

Also, for following best practices, keep all the **Server actions** in a separate folder called `actions`.

For example, the above example can be written as:

<br>

`app/actions/submitAction.js`
```javascript
'use server'

let greetUser = async (form) => {
  const name = form.get("name")
  console.log(`Hello, ${name}!`)
}

export default greetUser;
```

<br>

`app/page.js`
```javascript
"use client"
import submit from "@/app/actions/submitAction"

export default function Home() {

  return (<>
    <div className="m-auto">
      <form action={submit} className="flex gap-2">
        <input name="name" placeholder="Enter your name" className="border border-white p-1 rounded-sm" />
        <button type="submit" className="bg-purple-600 px-5 py-1 rounded-sm">Submit</button>
      </form>
    </div>
  </>)
}
```

The example will still work with no problems.  
Separating the files will make the code maintainance easy, that's it.

---