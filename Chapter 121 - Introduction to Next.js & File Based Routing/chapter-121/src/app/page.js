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
