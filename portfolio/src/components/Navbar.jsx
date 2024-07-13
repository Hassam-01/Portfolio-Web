import { IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { navBarStatus } from "../store/navBarSlice";
import { RxCross2 } from "react-icons/rx";
import Mode from "./Mode";
import { Link } from "react-router-dom";
import profile from "../assets/Profile.jpg";

import home from "../assets/icons.png";
import contact_dark from "../assets/id-card.png";
import home_dark from "../assets/home.png";
import phone_dark from "../assets/phone.png";
import project_dark from "../assets/project-management.png";
import phone from "../assets/icons - Copy (2).png";
import contact from "../assets/icons - Copy.png";
import project from "../assets/icons - Copy (3).png";

function Navbar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.navBarOpen.navBarOpen);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  console.log(darkMode);

  return (
    <div className="w-screen  flex px-2 relative items-center dark:bg-[#251243] justify-between md:justify-center md:px-4 py-4">
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
        {/* <div>
          {
            darkMode ? 
          }
        </div> */}
        <div
          className={`flex flex-col px-2 bg-white z-50 dark:bg-purple-900 bg-opacity- dark:bg-opacity-100 absolute ${
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
            <p className="text-center text-lg mt-4">Junior AI Engineer</p>
          </div>
          <div
            className={`flex flex-col items-center mt-6 space-y-4 ${
              isOpen ? "opacity-100" : "opacity-0"
            } transition-all duration-1000 `}
          >
            <div className="flex flex-col items-start space-y-4">

            <Link
              to="/home"
              className="flex gap-4 text-[16px] items-center"
              onClick={() => dispatch(navBarStatus())} >
            <img src={`${darkMode? home : home_dark}`} alt="Home" className="h-5 w-5" />
            Home
            </Link>
            <Link
              to="/projects"
              className="flex  gap-4 text-[16px] items-center"
              onClick={() => dispatch(navBarStatus())}>
            <img src={`${darkMode? project: project_dark}`} alt="Projects" className="h-5 w-5" />
            Projects
            </Link>
            <Link
              to="/contact"
              className="flex gap-4 text-[16px] items-center"
              onClick={() => dispatch(navBarStatus())}>
            <img src={`${darkMode? phone: phone_dark}`} alt="Contact" className="h-5 w-5 text-white" />
            Contact
            </Link>
            <Link
              to="/about"
              className="flex gap-4 text-[16px] items-center"
              onClick={() => dispatch(navBarStatus())}>
            <img src={`${darkMode? contact : contact_dark}`} alt="About" className="h-5 w-5" />
            About
            </Link>
              </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex  flex-grow justify-center">
        <Link to="/home" className="nav text-lg">
        Home
        </Link>
        <Link to="/projects" className="nav text-lg">
          Projects
        </Link>
        <Link to="/contact" className="nav text-lg">
          Contact
        </Link>
        <Link to="/about" className="nav text-lg">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
