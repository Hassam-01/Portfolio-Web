import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Startup from "./pages/Startup";
import Home from "./pages/Home";
import { WavyContainer } from "react-wavy-transitions";
// import Mode from "./components/Mode";

function App() {
  return (
    <Router>
      {/* <Mode/> */}
      {/* <WavyContainer/> */}

      <Routes>
        <Route path="/" element=
        {
        <Startup/>

        } ></Route>
        <Route path="/home" element={<Home/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
