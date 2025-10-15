import { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";

import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import iconoFondoAzul from "../../assets/iconoFondoBlanco1.webp";
const Navbar = () => {
  const [theme, ] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, );
  return (
    <>
      <nav className="md:static fixed top-0 left-0 w-full z-50 bg-[#ffffff] text-dark">
        <div className="container">
          <div className="flex items-center justify-between h-[70px] py-2">
            {/* Logo section */}
            <div className="w-[100px]">
              <a href="#">
                <img src={iconoFondoAzul} alt="icono" />
              </a>
            </div>
            {/* Desktop Menu section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-10">
                <li className="group relative cursor-pointer">
                  <a href="#" className="flex items-center gap-[2px] h-[72px]">
                    Home{" "}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 transition-all duration-200" />
                    </span>
                  </a>
                  {/* dropdown section */}
                  <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                    <ul className="space-y-3">
                    <li className="p-2 hover:bg-[#0a88b68e]">
                      <a href="#nosotros">Nosotros</a>
                    </li>
                    <li className="p-2 hover:bg-[#0a88b68e]">
                      <a href="#testimonios">Nuestra filosofía</a>
                    </li>
                    <li className="p-2 hover:bg-[#0a88b68e]">
                      <a href="#servicios">Nuestros Servicios</a>
                    </li>
                    <li className="p-2 hover:bg-[#0a88b68e]">
                      <a href="#porqueelegirnos">¿Por qué elegirnos?</a>
                    </li>
                  </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* Mobile Menu section */}
            <div className="md:hidden flex items-center gap-4">
              
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile side Menu components */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
