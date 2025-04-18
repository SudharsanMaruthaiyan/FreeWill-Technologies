import React from "react";
import { serviceImage, serviceImage2 } from "../assets/image";

const ServiceHeroSection = () => {
  return (
    <div>
      <div className="w-[95%] mx-auto lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 py-[40px] lg:py-[80px] font-[Nunito]">
        {/* Left Image Block */}
        <div className="flex justify-center items-center flex-col gap-3 relative">
          <div className="relative z-10">
            <img
              src={serviceImage}
              alt="service image"
              className="xl:w-[400px] rounded-2xl shadow-lg"
            />
          </div>
          {/* Background Layered Image */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 hidden xl:block opacity-40">
            <img
              src={serviceImage2}
              alt="service background"
              className="rounded-2xl object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Content Block */}
        <section className="bg-white py-12 md:px-10 px-5">
          <div className="max-w-6xl mx-auto text-text-dark">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">
              We do what we love — and we love empowering through technology.
            </h2>

            <p className="text-base md:text-lg mb-6 leading-relaxed">
              At{" "}
              <span className="font-semibold text-primary">
                FreeWill Technologies
              </span>
              , we are driven by passion and purpose. We specialize in
              delivering powerful digital solutions that help businesses,
              institutions, and individuals thrive in an ever-evolving tech
              world.
            </p>

            <p className="text-base md:text-lg mb-6 leading-relaxed">
              From{" "}
              <span className="font-medium text-primary-dark">
                web development
              </span>{" "}
              and{" "}
              <span className="font-medium text-primary-dark">
                UI/UX design
              </span>{" "}
              to{" "}
              <span className="font-medium text-primary-dark">
                technical training
              </span>{" "}
              and{" "}
              <span className="font-medium text-primary-dark">
                internship programs
              </span>
              , our services are designed not only to solve problems but to
              unlock possibilities.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8">
              Our team stays ahead of the curve with the latest technologies and
              trends to craft solutions that are modern, scalable, and
              future-ready.
            </p>

            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
