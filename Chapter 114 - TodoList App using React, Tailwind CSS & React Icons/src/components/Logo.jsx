import logo from "../assets/app_logo.jpg";

const Logo = () => {
  return (<>
    <div className="flex gap-1 items-center text-4xl m-2">
      <img src={logo} alt="" />
      <h1>yashlist.</h1>
    </div>
  </>)
}

export default Logo;