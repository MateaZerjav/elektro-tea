import React from "react";

const Lokacija = () => {
  return (
    <div
      name="lokacija"
      className="w-full h-screen bg-[#FFEA00] text-[#2D62B0]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[800px] w-full px-4 grid grid-cols-2 md:gap-20">
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.2756971220224!2d16.04013997578065!3d45.82576240924272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7e032df9b77%3A0x6e27ebd1e2895ae8!2sELEKTRO%20TEA%20d.o.o.!5e0!3m2!1shr!2sde!4v1716800113029!5m2!1shr!2sde"
              loading="lazy"
              className=" w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
              title="This is a unique title"
            ></iframe>
          </div>
          <div>
            <h2
              className="text-start ps-10
             font-bold text-3xl "
            >
              Adresa
            </h2>
            <p
              className="text-start ps-10
               pt-2
            "
            >
              {" "}
              Dubrava 27
            </p>
            <p
              className="text-start ps-10
               
            "
            >
              {" "}
              10000, Zagreb
            </p>
            <h2 className="text-start font-bold text-3xl pt-7 ps-10 ">
              Radno vrijeme
            </h2>
            <p
              className="text-start pt-2 ps-10
            "
            >
              {" "}
              Od ponedjeljka do Subote
            </p>
            <p
              className="text-start ps-10
            "
            >
              {" "}
              08 - 18 Sati
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lokacija;
