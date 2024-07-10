import Navbar from "../components/Navbar"
import PropTypes from "prop-types";

const NavBarLayoutHome = ({ children }) => {
    return (
        <div className="transition-all duration-500 ease-in min-h-screen flex flex-col bg-[#b6b6bb] text-[#333333] dark:text-white dark:bg-custom-gradient-dark">
            <Navbar/>
            <div className="flex-grow flex items-center justify-center h-4/5 px-4">
                <main className="flex-grow">
                    {children}
                </main>
            </div>
        </div>
    )
}

NavBarLayoutHome.propTypes = {
    children: PropTypes.node.isRequired
};

export default NavBarLayoutHome;
