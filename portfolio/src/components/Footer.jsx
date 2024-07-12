import { FaFacebook, FaDiscord  } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";


function Footer() {
    // <hr className="mt-6 mb-2"/>
  return (
    <div className="md:mb-10 mb-4 flex md:justify-center flex-col md:flex items-center  space-y-3 mt-7">
      <div className="reach-out flex justify-center md:gap-10 gap-4 text-3xl md:text-4xl items-center">
          <a href="https://www.facebook.com/abdullah.waqar.9279?mibextid=LQQJ4d">
          <FaFacebook className="hover:-translate-y-2 transition-all duration-300" />
          </a>
          <a href="https://github.com/vanix056">
          <FaGithub className="hover:-translate-y-2 transition-all duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/abdullah-waqar-25353b2a5/recent-activity/all/">
          <SiLinkedin className="hover:-translate-y-2 transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com/vanix_013?igsh=dWpxdmE3cTIzaW1p&utm_source=qr">
          <BsInstagram className="hover:-translate-y-2 transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com/vanix_013?igsh=dWpxdmE3cTIzaW1p&utm_source=qr">
          <FaDiscord  className="hover:-translate-y-2 transition-all duration-300" />
          </a>
        </div>
        <div className=" md:absolute right-5">
        <p>Developed by ABC</p>
        </div>
    </div>
  )
}

export default Footer
