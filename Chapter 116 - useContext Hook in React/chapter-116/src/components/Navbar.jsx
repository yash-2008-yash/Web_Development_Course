import CountDisplay from "./CountDisplay"

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-10 p-4 bg-purple-400">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li><CountDisplay /></li>
      </ul>
    </div>
  )
}

export default Navbar
