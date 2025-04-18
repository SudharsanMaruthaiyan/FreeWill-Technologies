import React from "react";
import Button from "../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  AOS.init();

  return (
    <div className="h-screen lg:h-[90vh] bg-[url(https://ik.imagekit.io/jjyo3gsee/FreeWellTech/HomePage/pexels-bradleyhook-123335.jpg?updatedAt=1744984537332)] bg-cover bg-center bg-no-repeat xl:px-[5%] px-[2%] relative z-0 overflow-hidden">
      <div className="bg flex items-center justify-start w-full h-full z0">
        <div className="flex flex-col gap-6 z-20 py-32">
          <h1 className="font-bold text-sm md:text-lg lg:text-xl text-white border-l-4 pl-2 border-secondary font-[Nunito]">
            Empowering Innovation. Enabling the Future.
          </h1>
          <h1 className="text-[32px] text-lg lg:text-[42px] font-bold text-white font-[Nunito]">
            Welcome to FreeWill Technologies
          </h1>
          <p className="font-medium md:text-lg lg:w-[50%] text-white text-sm font-[Nunito]">
            At FreeWill Technologies, we specialize in building powerful web and app solutions, 
            offering industry-relevant training, and delivering IT consultation to bridge the gap 
            between education and the tech world. Let’s build the future together.
          </p>
          <div className="mt-5">
            <button
              className="bg-primary border border-primary px-8 py-3 rounded-lg text-white hover:border-secondary hover:bg-white/90 shadow-2xl transition-all hover:text-secondary hover:border"
            ><a href="/contact">Contact</a> </button>
          </div>
        </div>
      </div>

      <img
        src="https://ik.imagekit.io/jjyo3gsee/FreeWellTech/HomePage/slider-shape-2.png"
        alt="slider"
        height={200}
        width={700}
        className="absolute -top-5 right-0 overflow-hidden"
        data-aos="fade-right"
        data-aos-anchor-placement="center-center"
      />
      <img
        src="https://ik.imagekit.io/jjyo3gsee/FreeWellTech/HomePage/slider-shape-1.png?"
        alt="slider"
        className="absolute top-10 right-[500px]"
        data-aos="fade-right"
        data-aos-anchor-placement="center-center"
      />
    </div>
  );
};

export default Header;
