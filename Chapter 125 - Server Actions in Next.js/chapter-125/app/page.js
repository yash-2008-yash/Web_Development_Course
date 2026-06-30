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