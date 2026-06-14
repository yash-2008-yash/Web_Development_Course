import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Logo = () => {
  return (<>
    <div className="flex gap-1 items-center text-4xl m-2">
      <IoMdCheckmarkCircleOutline className="text-6xl text-green-500" />
      <h1 className="font-light">yashlist.</h1>
    </div>
  </>)
}

export default Logo;