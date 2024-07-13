
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const LayoutOther = ({children}) =>{
    return(
        <div className="transition-all duration-500 ease-in min-h-screen flex flex-col z-0 bg-[#b6b6bb] text-[#333333] dark:text-white dark:bg-custom-gradient-dark">
            <Navbar/>
            <div className="flex flex-grow px-4 justify-center">
                <main className="flex-grow">
                    {children}
                </main>
            </div>
        {/* <hr /> */}
            <Footer />
        </div>
    )
}

LayoutOther.propTypes={
    children: PropTypes.node.isRequired,
}

export default LayoutOther;