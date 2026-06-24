import { memo } from "react"

const DisplayCount = memo(({ count }) => {

  console.log("DisplayCount rendered!")

  return (
    <div>
      <h1>Current Count: {count}</h1>
    </div>
  )
})

export default DisplayCount