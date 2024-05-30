import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const ONama = () => {
  return (
    <div name="onama" className="w-full h-screen bg-white">
      <div className="max-w-[600px] mx-auto px-8 flex flex-col justify-center h-full">
        <div>
          <p className=" max-w-[300px] mx-auto text-2xl sm:text-5xl font-semibold">
            {" "}
            <strong className="text-[70px] font-medium">Bok,</strong> <br />
            mi smo{" "}
          </p>
          <span className="text-[#2D62B0] font-extrabold text-3xl sm:text-6xl">
            ELEKTRO TEA
          </span>
          <span className="text-[#FFEA00] font-extrabold text-5xl sm:text-8xl">
            .
          </span>
        </div>
        <p className="text-xl">kod nas možeš pronaći sav potreban</p>

        <div>
          <h1 className="text-[#2D62B0] font-bold text-medium sm:text-2xl ">
            ELEKTROMATERIJAL
          </h1>
        </div>
        <div className="justify-center max-w-[200px] mx-auto">
          <button className=" text-[#2D62B0] group border-2 border-[#2D62B0] px-6 py-3 my-2 flex items-center hover:text-white  hover:border-[#FFEA00] hover:bg-[#FFEA00] ">
            <Link
              activeClass="active"
              to="lokacija"
              smooth={true}
              offset={50}
              duration={500}
            >
              Saznaj vise{" "}
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ONama;
