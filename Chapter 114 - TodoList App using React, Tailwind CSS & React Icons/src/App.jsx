import Logo from "./components/Logo"
import SeparationLine from "./components/SeparationLine"
import './index.css'

function App() {

  return (<>
    <div className="logo_section flex justify-between items-center">
      <Logo />
      <div className="text flex gap-1 mx-10">
        <p className="text-xl ">a simple to-do app built by</p>
        <p className="text-xl font-bold">Yashwanth M.</p>
      </div>
    </div>

    <SeparationLine />

    <div className="container bg-black rounded-lg min-h-[82vh] min-w-[70vw] m-auto mt-2">
      <div className="inputContainer rounded-2xl min-h-[7vh] max-w-[70vw] m-auto flex justify-center items-center">
        <input type="text" className="pl-5 focus:outline-none text-white" placeholder="enter a task." />
        <button className="bg-blue-300 px-1">add task.</button>
      </div>
    </div>
  </>)
}

export default App