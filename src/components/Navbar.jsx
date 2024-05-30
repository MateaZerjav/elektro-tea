import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const handleClick = () => setHamburger(!hamburger);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-[#2D62B0]">
      <div>
        <span className="text-[#2D62B0] font-extrabold text-3xl">
          <Link
            activeClass="active"
            to="onama"
            smooth={true}
            offset={50}
            duration={500}
          >
            ELEKTRO TEA
          </Link>
        </span>
        <span className="text-[#FFEA00] font-extrabold text-5xl">
          <Link
            activeClass="active"
            to="onama"
            smooth={true}
            offset={50}
            duration={500}
          >
            .
          </Link>
        </span>
      </div>

      {/* Menu */}

      <ul className="hidden md:flex ">
        <li>
          {" "}
          <Link
            activeClass="active"
            to="onama"
            smooth={true}
            offset={50}
            duration={500}
          >
            O nama
          </Link>
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="lokacija"
            smooth={true}
            offset={50}
            duration={500}
          >
            Lokacija i radno vrijeme
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="kontakt"
            smooth={true}
            offset={50}
            duration={500}
          >
            Kontakt
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="impresium"
            smooth={true}
            offset={50}
            duration={500}
          >
            Impresium
          </Link>
        </li>
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
            : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl uppercase">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="onama"
            smooth={true}
            offset={50}
            duration={500}
          >
            O nama
          </Link>
        </li>
        <li className="py-6 text-3xl uppercase">
          {" "}
          <Link
            onClick={handleClick}
            activeClass="active"
            to="lokacija"
            smooth={true}
            offset={50}
            duration={500}
          >
            Lokacija i radno vrijeme
          </Link>
        </li>
        <li className="py-6 text-3xl uppercase">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="kontakt"
            smooth={true}
            offset={50}
            duration={500}
          >
            Kontakt
          </Link>
        </li>
        <li className="py-6 text-3xl uppercase">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="impresium"
            smooth={true}
            offset={50}
            duration={500}
          >
            Impresium
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
