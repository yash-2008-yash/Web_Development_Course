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