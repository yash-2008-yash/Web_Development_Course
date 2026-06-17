import { useEffect, useState } from "react";

// Imported Components
import Logo from "./components/Logo"
import SeparationLine from "./components/SeparationLine"

// Imported React Icons from https://react-icons.github.io/react-icons
import { MdEdit } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa"
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

// uuid npm package for unique IDs for each todo
import { v4 as uuidv4 } from "uuid"

import './index.css'

function App() {

  const [todos, setTodos] = useState(() => {
    const todoString = localStorage.getItem("todos")
    return todoString ? JSON.parse(todoString) : []
  })

  const [todo, setTodo] = useState("")
  const [editID, setEditID] = useState(null)
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const handleAdd = () => {
    if (editID) {
      setTodos(prev => prev.map(item =>
        item.id === editID ? { ...item, todo } : item
      ))
      setEditID(null)
    } else {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    }
    setTodo("")
  }


  const handleEdit = (id) => {
    let t = todos.find(i => i.id === id)
    setTodo(t.todo)
    setEditID(id)
  }


  const handleDelete = (id) => {
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }


  const handleChange = (e) => {
    setTodo(e.target.value)
  }


  const handleCheck = (id) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
  }


  const toggleShowFinished = () => {
    setShowFinished(!showFinished)
  }


  return (<>

    {/* Logo Section */}
    <div className="flex flex-col justify-between items-center lg:flex-row mb-1">
      <Logo />
      <div className="text flex-col hidden sm:flex sm:flex-row sm:gap-1 items-center mx-10">
        <p className="text-lg ">a simple to-do app built by</p>
        <p className="text-lg font-bold text-green-500">Yashwanth M.</p>
      </div>
    </div>

    <SeparationLine className="mt-10" />

    {/* Container */}
    <div className="rounded-lg min-h-[82vh] w-full max-w-[90vw] sm:max-w-[75vw] lg:max-w-[60vw] m-auto mt-5 px-2">

      {/* INPUT Container */}
      <div className="border-x-2 border-green-500 rounded-md flex flex-col sm:flex-row gap-3 justify-center items-center min-h-[7vh] px-3 py-3 my-5">
        <input type="text" onChange={handleChange} value={todo} placeholder="enter a task."
          className="pl-3 focus:outline-none text-white bg-transparent w-full sm:flex-1" />
        <button onClick={handleAdd} disabled={todo.length === 0}
          className="bg-linear-to-br from-blue-400 to-blue-900 text-base sm:text-lg font-bold rounded-md w-full sm:w-auto px-4 py-1 sm:mr-3 whitespace-nowrap">
          {editID ? "✓ save." : "+ add."}
        </button>
      </div>

      {/* SHOW FINISHED Checkbox */}
      <div className="main flex justify-center items-center gap-2 mt-4 cursor-pointer" onClick={toggleShowFinished}>
        {(showFinished)
          ? <FaCheckCircle className="text-3xl sm:text-4xl text-green-500" />
          : <MdRadioButtonUnchecked className="text-3xl sm:text-4xl text-green-500" />
        }
        <p className="text-lg sm:text-xl">show finished.</p>
      </div>

      {/* Task Container */}
      <div className="taskContainer m-auto mt-5 min-h-[30vh] w-full border-2 border-green-500 rounded-tl-3xl rounded-br-3xl overflow-hidden">

        {todos.length === 0 &&
          <div className="text-center text-lg sm:text-2xl text-gray-300 mt-20 px-4">no todos to display :(</div>
        }

        {todos.map(item => {
          return (showFinished || !item.isCompleted) && (
            <div key={item.id} className="task flex justify-between items-center my-2 p-3 w-full">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 shrink-0" onClick={() => handleCheck(item.id)}>
                  {item.isCompleted
                    ? <FaCheckCircle className="text-3xl sm:text-4xl text-green-500 cursor-pointer" />
                    : <MdRadioButtonUnchecked className="text-3xl sm:text-4xl text-green-500 cursor-pointer" />
                  }
                </div>

                <h1 className={`${item.isCompleted ? "line-through" : ""} text-lg sm:text-2xl lg:text-3xl wrap-break-word min-w-0`}>{item.todo}</h1>
              </div>

              <div className="options flex items-center gap-2 sm:gap-5 shrink-0 ml-2">
                <div className="bg-linear-to-br from-green-500 to-green-950 px-2 py-1 sm:px-3 rounded-lg cursor-pointer">
                  <MdEdit className="text-2xl sm:text-4xl" onClick={(e) => { handleEdit(e, item.id) }} />
                </div>

                <div className="bg-linear-to-br from-green-500 to-green-950 px-2 py-1 sm:px-3 rounded-lg cursor-pointer">
                  <MdDeleteOutline className="text-2xl sm:text-4xl" onClick={(e) => { handleDelete(e, item.id) }} />
                </div>
              </div>
            </div>
          )
        })}

      </div>

    </div>
  </>)
}

export default App