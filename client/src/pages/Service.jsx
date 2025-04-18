import React from "react";
import Layout from "../layouts/Layout";
import ServiceHeader from "../components/ServiceHeader";
import { serviceImage, serviceImage2 } from "../assets/image";

const Service = () => {
  return (
    <div>
      <Layout>
        <div className="max-w-[100%] mx-auto">
          <ServiceHeader />
          <div className="w-[95%] mx-auto lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 py-[40px] lg:py-[80px]">
            <div  className="flex justify-center items-center flex-col gap-3 relative ">
              <div>
              <img src={serviceImage} alt="service image" className="xl:w-[400px] rounded-lg" />

              </div>
              <div className="absolute top-0 left-0 w-full h-full -z-10 hidden xl:block">
                <img src={serviceImage2} alt="service image" className="rounded-lg" />
              </div>
            </div>
            <section className="bg-white py-16 md:px-10 px-5">
              <div className="max-w-6xl mx-auto">
                <p className="text-2xl md:text-3xl font-semibold mb-6 text-[#0A278B] font-[Nunito]">
                  We do what we love — and we love empowering through
                  technology.
                </p>
                <p className="text-base md:text-lg mb-6 leading-relaxed font-[Nunito]">
                  At{" "}
                  <span className="font-semibold">FreeWill Technologies</span>,
                  we are driven by passion and purpose. We specialize in
                  delivering powerful digital solutions that help businesses,
                  institutions, and individuals thrive in an ever-evolving tech
                  world.
                </p>
                <p className="text-base md:text-lg mb-6 leading-relaxed font-[Nunito]">
                  From <span className="font-medium">web development</span> and{" "}
                  <span className="font-medium">UI/UX design</span> to{" "}
                  <span className="font-medium">technical training</span> and{" "}
                  <span className="font-medium">internship programs</span>, our
                  services are designed not only to solve problems but to unlock
                  possibilities.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed mb-8">
                  Our team stays ahead of the curve with the latest technologies
                  and trends to craft solutions that are modern, scalable, and
                  future-ready.
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Service;
