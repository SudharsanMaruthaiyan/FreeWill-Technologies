import React, { useEffect } from "react";
import Button from "../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="lg:h-[90vh] relative z-0 overflow-hidden bg-cover bg-center bg-no-repeat xl:px-[5%] px-[2%] " 
      style={{ backgroundImage: `url(https://ik.imagekit.io/HoneyJoe/freewill%20technologies%20assetss/2112.w039.n003.43B.p1.43.jpg?updatedAt=1745257174410)` }}>
      
      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="relative z-20 flex items-center justify-start w-[80%] h-full">
        <div className="flex flex-col gap-6 py-20 lg:py-32">
          <h1 className="font-bold text-xl md:text-lg lg:text-xl text-secondary border-l-4 pl-2 border-secondary font-[Nunito]">
            Empowering Innovation. Enabling the Future.
          </h1>
          <h1 className="text-[36px] leading-snug text-lg lg:text-[42px] font-bold text-white font-[Nunito]">
            Welcome to FreeWill Technologies
          </h1>
          <p className="font-medium md:text-lg lg:w-[50%] text-white text-sm font-[Nunito]">
            At FreeWill Technologies, we specialize in building powerful web and app solutions, 
            and delivering IT consultation to bridge the gap 
            between education and the tech world. Let’s build the future together.
          </p>
          <div className="mt-5">
            <button className="bg-primary border border-primary px-8 py-3 rounded-lg text-white hover:border-secondary hover:bg-white/90 shadow-2xl transition-all hover:text-secondary hover:border">
              <a href="/contact">Contact</a>
            </button>
          </div>
        </div>
      </div>

      {/* Shapes with AOS animation */}
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
