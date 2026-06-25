import Navbar from "./components/Navbar";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import IncreaseButton from "./components/IncreaseCount";
import DecreaseButton from "./components/DecreaseCount";

function App() {

  return (<>
    <Navbar />

    <div className="m-7 flex gap-5">
      <Component1 />
      <Component2 />
      <Component3 />
    </div>

    <div className="flex gap-5 px-10">
      <IncreaseButton />
      <DecreaseButton />
    </div>
  </>)
}

export default App;