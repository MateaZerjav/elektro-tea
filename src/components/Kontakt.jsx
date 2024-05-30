import React from "react";

export const Kontakt = () => {
  return (
    <div
      name="kontakt"
      className="w-full h-screen bg-white flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/pagxgopb"
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8">
          <p className=" text-[#2D62B0] text-7xl font-bold inline  ">Kontakt</p>
          <p className="pt-8">Kontaktiraj nas preko obrasca, </p>
          <p>
            ili pošalji e-mail:{" "}
            <a
              className=" text-[#FFEA00] hover:text-[#2D62B0] "
              href="mailto:elektro-tea@inet.hr"
            >
              elektro-tea@inet.hr
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <input
            type="text"
            placeholder="Ime i prezime"
            name="Ime i prezime"
            className=" text-center bg-[#2D62B0] text-white rounded-lg mb-5 py-4 w-[350px]	focus:outline-none "
          />
          <input
            name="e-mail"
            placeholder="Tvoja e-mail adresa"
            type="email"
            className=" text-center bg-[#2D62B0] text-[#FFEA00] rounded-lg mb-5 py-4 w-[350px]		focus:outline-none f"
          />
        </div>
        <input
          type="text"
          name="Poruka"
          rows="10"
          className="text-center bg-[#2D62B0] text-white rounded-full mb-5 py-5  pt-[130px] focus:outline-none "
        ></input>
        <div>
          <input
            type="submit"
            className="bg-[#FFEA00] py-4 rounded-full mb-11 text-white w-[330px] hover:bg-[#2D62B0] hover:text-[#FFEA00] "
          />
        </div>
      </form>
    </div>
  );
};
