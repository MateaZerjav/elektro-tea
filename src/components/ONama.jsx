import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const ONama = () => {
  return (
    <div name="onama" className="w-full h-screen bg-white">
      <div className="max-w-[600px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="inline-flex ">
          <p className=" text-2xl sm:text-4xl font-semibold">
            {" "}
            Stranica je u procesu izrade...uskoro smo tu za tebe
          </p>
        </div>

        <div>
          <span className="text-[#2D62B0] font-extrabold text-3xl sm:text-6xl">
            ELEKTRO TEA
          </span>
          <span className="text-[#FFEA00] font-extrabold text-5xl sm:text-8xl">
            .
          </span>
        </div>
        <p className="font-bold">kod nas mozes pronaci sav potreban</p>
        <h1 className="text-[#2D62B0] font-bold text-medium sm:text-2xl ">
          ELEKTROMATERIJAL
        </h1>
      </div>
    </div>
  );
};

export default ONama;
