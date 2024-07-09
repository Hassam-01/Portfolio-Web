// hooks and libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import "./App.css";
import Startup from "./pages/Startup";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";


// Layouts
import NavBarLayout from "./layouts/NavbarLayoutHome";
import LayoutOther from "./layouts/LayoutOther";
import ProjectDesc from "./pages/ProjectDesc";

function App() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className= {`${
      darkMode ? "dark" : ""
    }`}>

    <Router>
      {/* <Mode/> */}

      <Routes>
        <Route path="/" element=
        {
          <Startup/>
          
        } ></Route>
        <Route path="/home" element={
          <NavBarLayout>
            <Home/>
          </NavBarLayout>
          } ></Route>
        <Route path="/projects/" element={
          <LayoutOther>

          <Projects/>
          </LayoutOther>
          } ></Route>
        <Route path="/projects/:id" element={
          <LayoutOther>

          <ProjectDesc/>
          </LayoutOther>
          } ></Route>
        <Route path="/about" element={
          <LayoutOther>

          <About/>
          </LayoutOther>
          } ></Route>
        <Route path="/contact" element=
        {
          <NavBarLayout>
          <Contact/>
          </NavBarLayout>
          } ></Route>
      </Routes>
    </Router>
          </div>
  );
}

export default App;
