import React from "react";

const AboutCompany = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-20 z-20  px-[5%] lg:px-[9%] gap-10 bg-white">

      <div className="">
        <div className="flex flex-col gap-8 md:gap-10">
          <h1 className="font-[Nunito] pl-2 border-l-2 border-l-primary text-primary-light font-medium">About Company</h1>
          <h1 className=" font-[Nunito] lg:text-[48px] md:text-[32px] text-lg font-bold text-primary-dark leading-none">Keeping Our Promise, Achieving Your Goals</h1>
          <p className="font-[Nunito] text-slate-600 text-lg font-bold">Over <span className=" text-primary-dark font-[Nunito]">38+</span> Happy Customers</p>

          <hr />

          <p className=" font-[Nunito] text-slate-600 ">
            Dedicated to Your Success - Zwork Technology is all about honesty,
            transparency and delivering results. With a team of experts using
            the latest technology, we strive to help businesses grow and achieve
            their goals. Join us on this journey to success.
          </p>
        </div>
      </div>

      <div className=" flex items-center w-full justify-center relative">
        <img className=" rounded-lg h-[500px]" src="https://www.zworktechnology.com/assets/frontend/image/aboutus/about_company.png" alt="" />
        <div className=" absolute bottom-14 left-20 animate-bounce bg-primary-dark py-9 px-6 rounded-lg">
          <div className=" flex gap-2">
            <h1 className=" font-[Nunito] font-bold text-lg md:text-xl lg:text-[32px] text-white">01</h1>
            <p className=" font-[Nunito] pl-2 font-bold text-lg md:text-xl lg:text-lg  border-l-2 border-l-primary text-white">Years EXPREIENCE IN IT</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutCompany;
