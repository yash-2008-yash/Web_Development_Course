import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

const Navbar = () => {
  return (
    <div>
      <nav className='bg-blue-600 text-white font-bold flex justify-center gap-10 p-4'>
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/about"><h1>About</h1></Link>
        <Link to="/contact"><h1>Contact</h1></Link>
      </nav>
    </div>
  )
}

export default Navbar