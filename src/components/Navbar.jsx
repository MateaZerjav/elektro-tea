import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const handleClick = () => setHamburger(!hamburger);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-[#2D62B0]">
      <div>
        <span className="text-[#2D62B0] font-extrabold text-3xl">
          ELEKTRO TEA
        </span>
        <span className="text-[#FFEA00] font-extrabold text-5xl">.</span>
      </div>

      {/* Menu */}

      <ul className="hidden md:flex ">
        <li>O nama</li>
        <li>Lokacija i radno vrijeme</li>
        <li>Kontakt</li>
        <li>Impresium</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden text-2xl z-10">
        {!hamburger ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !hamburger
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white  flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl uppercase">O nama</li>
        <li className="py-6 text-3xl uppercase">Lokacija i radno vrijeme</li>
        <li className="py-6 text-3xl uppercase">Kontakt</li>
        <li className="py-6 text-3xl uppercase">Impresium</li>
      </ul>
    </div>
  );
};

export default Navbar;
