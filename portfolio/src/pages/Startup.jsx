import { useSelector } from "react-redux";
import dark from "../assets/output.png";
import Mode from "../components/Mode";
import { WavyContainer, WavyLink } from "react-wavy-transitions";

function Startup() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen dark:bg-primarydark bg-primarylight flex flex-col`}>
      <WavyContainer />
      <div className="py-2 px-2 w-screen transition-colors ease-in duration-500 ">
        <Mode />
      </div>
      <div className="flex-grow flex items-center justify-center transition-colors ease-in duration-500  w-screen">
        <div className="flex items-center justify-center flex-col">
          <img src={dark} alt="" className="h-52 w-52 md:h-96 md:w-96 " />
          <WavyLink
            color="#ffffff"
            className="h-fit w-fit dark:text-black transition-all duration-500"
            to="/home"
          >
            <div className="bg-gray-800 dark:bg-white rounded-full">
              <p className="md:text-xl font-light py-5 md:py-5 px-4">Start</p>
            </div>
          </WavyLink>
        </div>
      </div>
    </div>
  );
}

export default Startup;
