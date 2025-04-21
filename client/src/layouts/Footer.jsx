import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { logo } from "../assets/image";

const Footer = () => {
  return (
    <div className="lg:px-[5%] px-[2%] pt-20 bg-primary-dark text-white font-[Nunito]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Description + Social Icons */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="logo" className="w-[80px] h-[80px]" />
          <p className="text-text-light text-lg leading-relaxed">
            Honest, Transparent and Results-Driven Company with Experts in
            Latest Tech, Helping Businesses Grow.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/free-will-technologies-93b05a361"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-9 h-9 bg-[#1E9CD7] stroke-white hover:bg-[#177EAE] transition-all duration-300 p-[10px] rounded-lg" />
            </a>
            <a
              href="https://www.instagram.com/freewilltechnologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-9 h-9 bg-[#FE861B] stroke-white hover:bg-[#D76A10] transition-all duration-300 p-[10px] rounded-lg" />
            </a>
            <a
              href="https://wa.me/916382503265"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-9 h-9 bg-[#ECF8FF] stroke-[#4064AC] fill-[#4064AC] hover:bg-[#4064AC] hover:fill-white hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-text-light pl-2 border-l-4 border-[#FE861B]">
            Our Services
          </h1>
          {[
            "Web Design",
            "Web Development",
            "Graphic Design",
            "App Development",
            "CMS-Based Development",
            "Business Portfolio Sites",
          ].map((service, index) => (
            <a
              key={index}
              href="#"
              className="text-text-light hover:underline transition duration-300"
            >
              {service}
            </a>
          ))}
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-text-light pl-2 border-l-4 border-[#FE861B]">
            Useful Links
          </h1>
          {["Privacy Policy", "Terms & Conditions", "Contact Us"].map(
            (link, index) => (
              <a
                key={index}
                href="#"
                className="text-text-light hover:underline transition duration-300"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-text-light pl-2 border-l-4 border-[#FE861B]">
            Company
          </h1>
          {["About Us", "Careers", "Blog"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-text-light hover:underline transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="mt-10 border-[#E1F3FA]" />
      <h1 className="text-center py-6 text-text-light">
        © 2025{" "}
        <span className="hover:underline hover:text-[#1E9CD7]">
          FreeWill Technologies
        </span>
        . All Rights Reserved by{" "}
        <span className="hover:underline hover:text-[#FE861B]">
          FreeWill Technologies
        </span>
      </h1>
    </div>
  );
};

export default Footer;
