import { memo } from "react"

const DisplayBinary = memo(({ binary }) => {

  console.log("DisplayBinary rendered!")

  return (
    <div>
      <h1>Current Binary: {binary}</h1>
    </div>
  )
})

export default DisplayBinary