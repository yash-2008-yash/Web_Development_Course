import { useContext } from "react"
import { countContext } from "../context"

const CountDisplay = () => {
  const count = useContext(countContext)
  return (<>
    Current count: {count}
  </>)
}

export default CountDisplay
