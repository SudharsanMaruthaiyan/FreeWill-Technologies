import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { logo } from "../assets/image";

const Footer = () => {
  return (
    <div className="lg:px-[5%] px-[2%] pt-20 bg-primary-dark text-white font-[Nunito]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10 lg:gap-10">
        {/* Logo + Description + Social Icons */}
        <div className="flex flex-col items-start gap-4">
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-[80px] h-[80px]"
            />
          </div>
          <p className="text-text-light font-[Nunito] text-lg">
            Honest, Transparent and Results-Driven Company with Experts in
            Latest Tech, Helping Businesses Grow.
          </p>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-2 justify-end w-full">
              <a
                href="https://www.linkedin.com/in/free-will-technologies-93b05a361"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-9 h-9 bg-[#1E9CD7] stroke-white hover:bg-[#177EAE] transition-all duration-300 ease-in-out p-[10px] rounded-lg" />
              </a>

              <a
                href="https://www.instagram.com/freewilltechnologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-9 h-9 bg-[#FE861B] stroke-white hover:bg-[#D76A10] transition-all duration-300 ease-in-out p-[10px] rounded-lg" />
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
        </div>

        {/* Services */}
        <div>
          <ul className="flex flex-col gap-4 items-start">
            <h1 className="font-[Nunito] text-text-light text-xl font-bold pl-2 border-l-4 border-[#FE861B]">
              Our Services
            </h1>
            <li className="font-[Nunito] text-text-light hover:underline transition-all duration-300 ease-in-out">
              <a href="#">Web App Development</a>
            </li>
            <li className="font-[Nunito] text-text-light hover:underline transition-all duration-300 ease-in-out">
              <a href="#">Mobile App Development</a>
            </li>
            <li className="font-[Nunito] text-text-light hover:underline transition-all duration-300 ease-in-out">
              <a href="#">UI/UX & Graphic Design</a>
            </li>
            <li className="font-[Nunito] text-text-light hover:underline transition-all duration-300 ease-in-out">
              <a href="#">Trainings & Internships</a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="w-full  flex">
          <ul className="flex flex-col gap-4 lg:items-start">
            <h1 className="font-[Nunito] text-text-light text-xl font-bold pl-2 border-l-4 border-[#FE861B]">
              Useful Links
            </h1>
            <li className="font-[Nunito] text-text-light hover:underline transition-all duration-300 ease-in-out">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="font-[Nunito] text-text-light hover:underline transition-all duration-300 ease-in-out">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="font-[Nunito] text-text-light hover:underline transition-all duration-300 ease-in-out">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div className="flex">
          <ul className="flex flex-col gap-4 lg:items-start">
            <h1 className="font-[Nunito] text-text-light text-xl font-bold pl-2 border-l-4 border-[#FE861B]">
              Company
            </h1>
            <li className="font-[Nunito] text-text-light hover:underline transition-all duration-300 ease-in-out">
              <a href="#">About Us</a>
            </li>
            <li className="font-[Nunito] text-text-light hover:underline transition-all duration-300 ease-in-out">
              <a href="#">Careers</a>
            </li>
            <li className="font-[Nunito] text-text-light hover:underline transition-all duration-300 ease-in-out">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="mt-8 border-[#E1F3FA]" />
      <h1 className="text-center font-[Nunito] py-6 text-text-light">
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
