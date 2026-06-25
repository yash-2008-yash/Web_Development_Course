import { useDispatch } from "react-redux";
import { decrease } from "../features/counterSlice";

function DecreaseButton() {

  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(decrease())} className="bg-purple-400 px-6 py-1 rounded-sm">
      Decrease
    </button>
  )
}

export default DecreaseButton