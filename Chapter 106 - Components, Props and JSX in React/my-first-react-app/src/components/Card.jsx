import React from 'react'
import './components_css/Card.css'

const Card = ({ title = "Title of the Card", desc = "Description" }) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default Card
