import { useDispatch } from "react-redux";
import { increase } from "../features/counterSlice";

function IncreaseButton() {

    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(increase())} className="bg-purple-400 px-6 py-1 rounded-sm">
            Increase
        </button>
    )
}

export default IncreaseButton