// hooks

// components
// import Navbar from "../components/Navbar";

// images
import main from "../assets/output1.png";
import ml from "../assets/ML.png";
import ai from "../assets/technology.png";
import nn from "../assets/neural-network.png";
import dark from "../assets/homedark.png";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";


function Home() {

  const darkMode= useSelector((state) => state.darkMode.darkMode);
  const  location = useLocation();
  console.log(location.pathname)
  return (
      <div className="w-full flex flex-col items-center justify-center flex-grow overflow-hidden md:my-5 my-4" >
        <div className="flex flex-col space-y-3 md:space-y-3 items-center justify-center  flex-grow">
          <div className="w-full text-center">
            <h1 className="text-2xl md:text-3xl anton-sc-regular tracking-widest dark:text-[#CC8BF2] font-semibold z-10">
              MUHAMMAD ABDULLAH WAQAR
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <img src={main} alt="" className= {`${darkMode? "": "hidden"} h-64 w-64 z-0`} />
            <img src={dark} alt="" className=" dark:hidden h-64 w-64 z-0" />
            <span className="flex flex-col text-center mt-12">
              <span className="flex gap-3 items-baseline">
                <img src={ai} alt="" className="h-4 w-4" />
                <p className="md:text-[16px] text-sm">ARTIFICIAL INTELLIGENCE</p>
              </span>
              <span className="flex gap-3 text-center items-baseline">
                <img src={nn} alt="" className="h-4 w-4" />
                <p className="md:text-[16px] text-sm">NEURAL NETWORKS</p>
              </span>
              <span className="flex gap-3 items-baseline">
                <img src={ml} alt="" className="h-4 w-4" />
                <p className="md:text-[16px] text-sm">MACHINE LEARNING</p>
              </span>
            </span>
          </div>
        </div>
      </div>
  );
}

export default Home;
