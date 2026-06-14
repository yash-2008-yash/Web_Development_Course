import Logo from "./components/Logo"
import SeparationLine from "./components/SeparationLine"
import { FaCheckCircle } from "react-icons/fa"
// import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import './index.css'

function App() {

  return (<>

    {/* Logo Section */}
    <div className="flex flex-col justify-between items-center lg:flex-row mb-1">
      <Logo />
      <div className="text flex-col hidden sm:flex sm:flex-row sm:gap-1 items-center mx-10">
        <p className="text-base ">a simple to-do app built by</p>
        <p className="text-base font-bold text-green-500">Yashwanth M.</p>
      </div>
    </div>

    <SeparationLine className="mt-10" />

    {/* Container */}
    <div className="rounded-lg min-h-[82vh] min-w-[70vw] m-auto mt-2">

      {/* INPUT Container */}
      <div className="border-x-2 border-green-500 rounded-md mx-4 flex flex-col gap-4 sm:flex-row md:gap-4 justify-center items-center min-h-[7vh] sm:max-w-[50vw] sm:m-auto my-5">
        <input type="text" className="pl-5 focus:outline-none text-white" placeholder="enter a task." />
        <button className="bg-blue-300 text-black font-bold rounded-md w-[80vw] sm:w-[30vh] min-w-20 px-2 py-0.5 sm:mr-5">+ add.</button>
      </div>

      {/* SHOW FINISHED Checkbox */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <FaCheckCircle className="text-2xl" />
        {/* <MdOutlineRadioButtonUnchecked className="text-2xl" /> */}
        <p>Show Finished Ones</p>

        {/* <input type="checkbox" className="appearance-none" name="showFinished" id="showFinished" />Show Finished tasks */}
      </div>

      <div className="tasks">
        <div className="task py-3 px-10 mt-3">
          <h1 className="text-2xl bg-gray-800 py-3 px-10 mt-3">task 1 - get a job</h1>
          <h1 className="text-2xl bg-gray-800 py-3 px-10 mt-3">task 1 - get a job</h1>
          <h1 className="text-2xl bg-gray-800 py-3 px-10 mt-3">task 1 - get a job</h1>
          <h1 className="text-2xl bg-gray-800 py-3 px-10 mt-3">task 1 - get a job</h1>
          <h1 className="text-2xl bg-gray-800 py-3 px-10 mt-3">task 1 - get a job</h1>
        </div>
      </div>

    </div>
  </>)
}

export default App