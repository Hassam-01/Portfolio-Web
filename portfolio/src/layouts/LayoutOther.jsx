
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";


const LayoutOther = ({children}) =>{
    return(
        <div className="transition-all duration-500 ease-in min-h-screen flex flex-col z-0 bg-custom-gradient dark:bg-custom-gradient-dark">
            <Navbar/>
            <div className="flex flex-grow px-4 justify-center">
                <main className="flex-grow">
                    {children}
                </main>
            </div>
        </div>
    )
}

LayoutOther.propTypes={
    children: PropTypes.node.isRequired,
}

export default LayoutOther;