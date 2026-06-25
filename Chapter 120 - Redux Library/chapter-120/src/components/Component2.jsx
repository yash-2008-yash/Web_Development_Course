import { useSelector } from "react-redux";

function Component2() {

  const count = useSelector(state => state.counter.count);

  return (<>
    <div className="bg-green-500 p-2 min-h-[10vh] text-white flex flex-col justify-center items-center">
      <h1>COMPONENT 2</h1>
      <h1>Count: {count}</h1>
    </div>
  </>);
}

export default Component2