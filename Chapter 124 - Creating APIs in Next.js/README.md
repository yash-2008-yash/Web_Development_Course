# Creating APIs in Next.js

Next.js isn't just a front-end framework. **It's a full-stack framework.**  
We can do both frontend tasks and backend in one codebase.

In this chapter, let's create an API and manage some HTTP methods.

A route file allows you to create custom request handlers for a given route.  
The following HTTP methods are supported: **GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.**

This **"route file"** is `route.js`, which we should create. This file shouldn't be in the same directory as `page.js`. So, create a folder called `api` and add `route.js` into it.  
This is your **route file** now.

Basically, 
- **GET** is frontend receiving data from the backend.  
Ex: Displaying data on the screen.  
- **POST** is backend receiving data from the frontend.  
Ex: Submitting form data.

Let's see an example for both.

---
### GET Request (Backend to Frontend)

This example app has a button. When clicked, some data gets displayed on the screen.  
That "some data" comes from the backend using **GET** request.

<br>

`app/api/route.js`
```javascript
import { NextResponse } from "next/server"

export async function GET() {
  let data = {
    name: "Yashwanth",
    role: "Full-Stack Dev"
  }

  return NextResponse.json(data)
}
```
When the app hits a **GET** request, this file will return this `data` to the app.
  
<br>

`app/page.js`
```javascript
"use client"
import { useState } from "react"

export default function Home() {

  const [data, setData] = useState(null)

  const handleClick = async () => {
    let request = await fetch("/api")
    let response = await request.json()

    setData(response)
    console.log(response)
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl">Receive data from the backend!</h1>
      <button onClick={handleClick} className="border border-green-400 bg-green-400 text-black px-10 py-1 rounded-sm">Click me!</button>

      {data &&
        <div className="m-5">
          <h1 className="text-xl">Received data:</h1>
          <pre>{JSON.stringify(data, null, 1)}</pre>
        </div>
      }
    </div>
  )
}
```
Now, when you press the **Click me!** button, you will see the received data on the screen.  
That data came from the backend `app/api/route.js`

---
### POST Request (Frontend to Backend)

This example app asks you to fill a form. When the form is submitted, the form goes to the backend.  
The backend received the data using **POST** request.

I am using **React Hook Form** library for handling form in the example app.  
You can install it by using this command:
```bash
npm install react-hook-form
```
<br>

`app/page.js`
```javascript
"use client"
import { useForm } from "react-hook-form"

export default function Home() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    let request = await fetch("/api",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    )
    let response = await request.json()
    console.log(response)
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className='text-4xl text-center m-5'>FORM</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 justify-center items-center'>
        <input type='text' {...register("username")} placeholder='enter username' className='max-w-[20vw] pl-5 border border-white' />
        <input type='password' {...register("password")} placeholder='enter password' className='max-w-[20vw] pl-5 border border-white' />

        <button type="submit" className='bg-green-900 px-3 py-1'>Submit</button>
      </form>
    </div>
  )
}
```
When you submit the form, it hits the **POST** request at `/api`.  
Then `route.js` gets it and prints the data in the backend terminal.

<br>

`app/api/route.js`
```javascript
import { NextResponse } from "next/server";

export async function POST(request) {

  let data = await request.json()
  console.log(data)

  return NextResponse.json(
    {
      data_received: true
    }
  )
}
```
After receiving the data, `route.js` sends a response saying `{ data_received: true }`.  
You can see the response in the console.

---

Congrats!!! You just built an API.  
This `app/api/route.js` itself is an API. Also, it's a REST API.

You just created an endpoint at `/api` that anyone can hit and get data from. That's literally what an API is.  
In Internet, you see a lot of APIs without realizing. Some developer wrote a `route.js` kind of file on their server that returns some data. You just did the exact same thing, just locally. The only difference is their API is on the internet, and this API is on **localhost:3000**.

*Don't stop for anything, guys! Keep going!*<br>
*Just see how far you have come.*<br>
*Always have this hunger of learning and see how far you'll go.*

---