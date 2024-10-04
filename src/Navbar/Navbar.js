import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react"; // Import useRef and useState
import { FaBars, FaTimes } from "react-icons/fa"; // Import FaBars and FaTimes
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const navRef = useRef(); 
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage visibility of nav links
  

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev); // State of menu bar
    };

  return (
    <div className="header-container flex flex-row w-full border-b-2 items-center border-custom-purple bg-[#fccbff]">
      <div className="logo-container flex flex-row items-center">
        <img
          src="https://docs.ufosc.org/img/logo.png"
          className="logo"
          onClick={() => window.open("https://ufosc.org/", "_blank")}
          alt="UF OSC Logo"
        />
      </div>

      {/* Navigation links */}
      <div
        ref={navRef} // Attach the ref to the nav container
        className={`nav-container flex ${isMenuOpen ? 'responsive_nav' : 'flex-row'} justify-center items-center flex-grow sm:gap-16 gap-6`}
>     
        <div className="header-option-container" onClick={() => navigate(`/`)}>
          <div className="header-option-text">Home</div>
        </div>
        <div className="header-option-container" onClick={() => navigate(`/download`)}>
          <div className="header-option-text">Download</div>
        </div>
        <div className="header-option-container" onClick={() => navigate(`/about`)}>
          <div className="header-option-text">About</div>
        </div>
        <div className="header-option-container" onClick={() => navigate(`/get-involved`)}>
          <div className="header-option-text">Get Involved</div>
        </div>

        {/* Menu and close button for smaller screens */}
      {isMenuOpen ? (
        <button className="nav-btn nav-close-btn" onClick={toggleMenu}>
          <FaTimes />
        </button>
      ) : (
        <button className="nav-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
      )}
    </div>
  </div>
);
};

export default Navbar;
