import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMoon, IoSunny } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useTheme } from "../ThemeContext"; // Make sure the path is correct

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full top-0 z-50 dark:bg-[#000300] bg-white dark:text-white px-8">
      <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">OCLOUD.</h1>
        <ul className="hidden md:flex">
          <NavLink to="/" exact="true" activeclassname="active" className="p-4">
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active" className="p-4">
            About
          </NavLink>
          <NavLink to="/contact" activeclassname="active" className="p-4">
            Contact
          </NavLink>
          <NavLink to="/pricing" activeclassname="active" className="p-4">
            Pricing
          </NavLink>
          <NavLink to="/login" activeclassname="active" className="p-4">
            Login
          </NavLink>
          <button onClick={toggleDarkMode} className="p-4">
            {darkMode ? <IoSunny /> : <IoMoon />}
          </button>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-300 ease-in-out duration-500 dark:border-r-gray-700 dark:bg-[#000300] bg-white dark:text-white"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            OCLOUD.
          </h1>
          <NavLink
            to="/"
            exact="true"
            activeclassname="active"
            className="p-4 border-b border-gray-600 flex dark:border-gray-700"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeclassname="active"
            className="p-4 border-b border-gray-600 flex dark:border-gray-700"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            activeclassname="active"
            className="p-4 border-b border-gray-600 flex dark:border-gray-700"
          >
            Contact
          </NavLink>
          <NavLink
            to="/pricing"
            activeclassname="active"
            className="p-4 border-b border-gray-600 flex dark:border-gray-700"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/login"
            activeclassname="active"
            className="p-4 border-b border-gray-600 flex dark:border-gray-700"
          >
            Login
          </NavLink>
          <button onClick={toggleDarkMode} className="p-4">
            {darkMode ? <IoSunny /> : <IoMoon />}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
