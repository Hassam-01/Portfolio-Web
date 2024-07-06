import { CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux"
import { changeDarkMode } from "../store/darkModeSlice";


function Mode() {
//   const [isDark, setIsDark] = useState(true);
const dispatch = useDispatch();
const darkMode = useSelector((state)=> state.darkMode.darkMode);



  return (
    <div className="flex justify-start bg-primary px-2 py-2">
      {darkMode && <CiLight className="h-6 w-6" onClick={()=>dispatch(changeDarkMode())}/>}

      {!darkMode && <MdLightMode className="h-6 w-6 text-yellow-400"  onClick={()=>dispatch(changeDarkMode())} />}
    </div>
  );
}

export default Mode;
