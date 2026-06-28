import Link from "next/link"

const Navbar = () => {
  return (<>
    <ul className="p-5 flex gap-10 text-xl">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </ul>
  </>)
}

export default Navbar