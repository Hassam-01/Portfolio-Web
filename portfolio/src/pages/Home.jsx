// hooks

// components
// import Navbar from "../components/Navbar";

// images
import main from "../assets/output1.png";
import ml from "../assets/ML.png";
import ai from "../assets/technology.png";
import nn from "../assets/neural-network.png";

function Home() {
  return (
      <div className="w-full flex flex-col items-center justify-center flex-grow overflow-hidden">
        <div className="flex flex-col space-y-5 items-center justify-center  flex-grow">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-5xl anton-sc-regular tracking-widest text-[#CC8BF2] font-semibold z-10">
              MUHAMMAD ABDULLAH WAQAR
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <img src={main} alt="" className="h-80 w-80 z-0" />
            <span className="flex flex-col text-white text-center mt-12">
              <span className="flex gap-3 items-baseline">
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
  );
}

export default Home;
