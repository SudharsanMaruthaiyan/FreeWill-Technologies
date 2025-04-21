import React from "react";

const AboutCompany = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-20 z-20  px-[5%] lg:px-[9%] gap-10 bg-white">
      <div className="">
        <div className="flex flex-col gap-8 md:gap-10">
          <h1 className="font-[Nunito] pl-2 border-l-2 border-l-primary text-primary-light font-medium">
            About Company
          </h1>
          <h1 className=" font-[Nunito] lg:text-[48px] md:text-[32px] text-lg font-bold text-primary-dark leading-none">
          Empowering Innovation
          </h1>

          <hr />

          <p className=" font-[Nunito] text-slate-600 ">
          FREE WILL TECHNOLOGIES is a tech-driven company dedicated to delivering smart and reliable digital solutions. We specialize in web development, software services, automation, and design. Our mission is to help businesses and individuals grow through technology.
          We believe in the power of "free will" — the freedom to think, build, and innovate without limits
          </p>
        </div>
      </div>

      <div className=" flex items-center w-full justify-center relative">
        <img
          className=" rounded-lg h-[500px]"
          src="https://ik.imagekit.io/HoneyJoe/freewill%20technologies%20assetss/20943566.jpg?updatedAt=1745257878419"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutCompany;
