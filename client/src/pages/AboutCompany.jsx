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
            At FREE WILL TECHNOLOGIES, we are committed to delivering impactful
            digital solutions while nurturing emerging tech talent. Founded with
            a vision to bridge the gap between education and industry, we
            specialize in providing technology services, training, and
            internship programs that shape the future workforce. We believe in
            the power of “free will” — the freedom to explore, learn, and
            innovate with technology.
          </p>
        </div>
      </div>

      <div className=" flex items-center w-full justify-center relative">
        <img
          className=" rounded-lg h-[500px]"
          src="https://www.zworktechnology.com/assets/frontend/image/aboutus/about_company.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutCompany;
