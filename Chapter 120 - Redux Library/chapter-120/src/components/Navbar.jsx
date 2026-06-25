import { useSelector } from "react-redux";

function Navbar() {

  const count = useSelector(state => state.counter.count);

  return (<>
    <ul className="flex gap-10 px-5 py-3 bg-purple-400 font-bold">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Current count is {count}</li>
    </ul>
  </>)
}

export default Navbar;