import { useSelector } from "react-redux";
import dark from "../assets/output.png";
import Mode from "../components/Mode";
import { WavyContainer, WavyLink } from "react-wavy-transitions";

function Startup() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <WavyContainer />
      <div className="py-2 px-2 w-screen dark:bg-primarydark bg-primarylight transition-colors ease-in duration-500">
        <Mode />
      </div>
      <div className="dark:bg-primarydark bg-primarylight transition-colors ease-in duration-500 items-center flex justify-center h-screen w-screen">
        <div className="items-center flex justify-center flex-col">
          <img src={dark} alt="" className="h-52 w-52" />
          <div className="bg-gray-800 text-white dark:bg-white rounded-full h-fit w-fit py-5 px-4 dark:text-black transition-all duration-500">
            <WavyLink
              color="#ffffff"
              className=""
              to="/home">
              Start
            </WavyLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startup;
