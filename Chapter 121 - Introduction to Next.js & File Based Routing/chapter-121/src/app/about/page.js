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