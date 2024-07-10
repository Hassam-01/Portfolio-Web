import { IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { navBarStatus } from "../store/navBarSlice";
import { RxCross2 } from "react-icons/rx";
import Mode from "./Mode";
import { Link } from "react-router-dom";
import profile from "../assets/Profile.jpg";

import home from "../assets/icons.png";
import phone from "../assets/icons - Copy (2).png";
import contact from "../assets/icons - Copy.png";
import project from "../assets/icons - Copy (3).png";

function Navbar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.navBarOpen.navBarOpen);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  console.log(darkMode);

  return (
    <div className="w-screen flex dark:text-white text-[#333333] px-2 relative text-bck items-center dark:bg-[#251243] justify-between md:justify-center md:px-4 py-4">
      <div className="flex-none absolute ml-2 top-2 left-2">
        <Mode />
      </div>
      <div className="md:hidden  flex items-center mr-2">
        <div className="absolute top-2 right-4">

        {isOpen ? (
          <RxCross2
          className="h-6 w-6 transition-all duration-300 font-bold"
          onClick={() => dispatch(navBarStatus())}
          />
        ) : (
          <IoMdMenu
          className="h-6 w-6 transition-all duration-300"
          onClick={() => dispatch(navBarStatus())}
          />
        )}
        </div>
        <div
          className={`flex flex-col px-2 bg-white z-50 dark:bg-purple-900 bg-opacity-20 dark:bg-opacity-100 absolute ${
            isOpen ? "h-96 px-3 py-6 w-full" : "p-0 w-full h-0 overflow-hidden"
          } right-0 left-0 top-16 transition-all duration-300 ease-linear`}
        >
          <div
            className={`flex items-center gap-4 px-4 transition-all duration-200 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={profile}
              alt="Profile"
              className="h-32 w-32 rounded-full"
            />
            <p className="text-center text-xl mt-4">Junior AI Engineer</p>
          </div>
          <div
            className={`flex flex-col items-center mt-6 space-y-4 ${
              isOpen ? "opacity-100" : "opacity-0"
            } transition-all duration-1000 `}
          >
            <div className="flex flex-col items-start space-y-4">

            <Link
              to="/home"
              className="flex gap-4 text-xl"
              onClick={() => dispatch(navBarStatus())} >
            <img src={home} alt="Home" className="h-7 w-7" />
            Home
            </Link>
            <Link
              to="/projects"
              className="flex  gap-4 text-xl"
              onClick={() => dispatch(navBarStatus())}>
            <img src={project} alt="Projects" className="h-7 w-7" />
            Projects
            </Link>
            <Link
              to="/contact"
              className="flex items-start gap-4 text-xl"
              onClick={() => dispatch(navBarStatus())}>
            <img src={phone} alt="Contact" className="h-7 w-7 text-white" />
            Contact
            </Link>
            <Link
              to="/about"
              className="flex items-start gap-4 text-xl"
              onClick={() => dispatch(navBarStatus())}>
            <img src={contact} alt="About" className="h-7 w-7" />
            About
            </Link>
              </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-grow justify-center">
        <Link to="/home" className="nav">
        Home
        </Link>
        <Link to="/projects" className="nav">
          Projects
        </Link>
        <Link to="/contact" className="nav">
          Contact
        </Link>
        <Link to="/about" className="nav">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
