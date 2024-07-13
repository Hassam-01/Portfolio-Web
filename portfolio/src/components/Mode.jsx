import { CiLight } from "react-icons/ci";
// import { MdLightMode } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux"
import { changeDarkMode } from "../store/darkModeSlice";
import { IoMdMoon } from "react-icons/io";

function Mode() {
//   const [isDark, setIsDark] = useState(true);
const dispatch = useDispatch();
const darkMode = useSelector((state)=> state.darkMode.darkMode);



  return (
    <div className="flex justify-start bg-primary px-2 py-2">
      {darkMode && <CiLight className="h-5 w-5 text-white" onClick={()=>dispatch(changeDarkMode())}/>}

      {!darkMode && <IoMdMoon className="h-5 w-5"  onClick={()=>dispatch(changeDarkMode())} />}
    </div>
  );
}

export default Mode;
