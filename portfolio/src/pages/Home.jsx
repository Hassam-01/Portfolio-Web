import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import main from "../assets/output1.png";
import ml from "../assets/ML.png";
import ai from "../assets/technology.png";
import nn from "../assets/neural-network.png";

function Home() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } transition-all duration-500 ease-in min-h-screen flex-grow flex flex-col`}
    >
      <div className="bg-custom-gradient dark:bg-custom-gradient-dark w-full  flex-grow text-center items-center">
        <div className="flex justify-end px-2 py-2">
          <Navbar />
        </div>
        <div className="flex flex-col space-y-5 flex-grow items-center min-h-[90vh] justify-center">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-5xl anton-sc-regular tracking-widest text-[#CC8BF2] font-semibold z-10">
              MUHAMMAD ABDULLAH WAQAR
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <img src={main} alt="" className="h-80 w-80 z-0" />
            <span className="flex flex-col text-white text-center mt-12">
              <span className="flex gap-3 items-baseline space-y-3">
                <img src={ai} alt="" className="h-5 w-4" />
                <p className="text-xl">ARTIFICIAL INTELLIGENCE</p>
              </span>
              <span className="flex gap-3 text-center items-baseline">
                <img src={nn} alt="" className="h-5 w-5" />
                <p className="text-xl">NEURAL NETWORKS</p>
              </span>
              <span className="flex gap-3 items-baseline">
                <img src={ml} alt="" className="h-5 w-5" />
                <p className="text-xl">MACHINE LEARNING</p>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
