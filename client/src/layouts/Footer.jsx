import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="lg:px-[5%] px-[2%] pt-20 bg-[#181A2E]">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-10 lg:gap-20">
        <div className="flex flex-col items-start gap-4">
          <div>
            <img
              src="https://ik.imagekit.io/jjyo3gsee/FreeWellTech/HomePage/WhatsApp%20Image%202025-04-18%20at%2019.47.56_3e650e4c.jpg?"
              alt="logo"
              className=" w-[80px] h-[80px]"
            />
          </div>
          <p className=" text-white font-[Nunito] text-lg">
            Honest, Transparent and Results-Driven Company with Experts in
            Latest Tech, Help Businesses Grow.
          </p>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-2 justify-end w-full">
              <Linkedin className="w-9 h-9 bg-[#ECF8FF] stroke-[#4064AC] fill-[#4064AC] hover:bg-[#4064AC] hover:fill-white hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              <Facebook className="w-9 h-9 bg-[#ECF8FF] stroke-[#4064AC] fill-[#4064AC] hover:bg-[#4064AC] hover:fill-white hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              <Instagram className="w-9 h-9 bg-[#fff1f3] stroke-[#D1005C] hover:bg-[#D1005C] hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              <Youtube className="w-9 h-9 bg-[#fff1f3] stroke-[#D1005C] hover:bg-[#D1005C] hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              <Twitter className="w-9 h-9 bg-[#ECF8FF] stroke-[#4064AC] fill-[#4064AC] hover:bg-[#4064AC] hover:fill-white hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
            </div>
          </div>
        </div>

        <div>
          <ul className=" flex flex-col gap-4 items-start">
            <h1 className=" font-[Nunito] text-white text-xl font-bold pl-2 border-l-2 border-secondary">
              Our Service
            </h1>
            <li className="font-[Nunito] text-white">
              <a href="">Web Development</a>
            </li>
            <li className="font-[Nunito] text-white">
              <a href="">Mobile Development</a>
            </li>
            <li className="font-[Nunito] text-white">
              <a href="">E-Commerce Solution</a>
            </li>
            <li className="font-[Nunito] text-white">
              <a href="">CMS, CRM, & ERP</a>
            </li>
          </ul>
        </div>

        <div className=" w-full lg:justify-center flex ">
          <ul className=" flex flex-col gap-4 lg:items-start">
            <h1 className=" font-[Nunito] text-white text-xl font-bold pl-2 border-l-2 border-secondary">
              Our Service
            </h1>
            <li className="font-[Nunito] text-white">
              <a href="">Custom Software</a>
            </li>
            <li className="font-[Nunito] text-white">
              <a href="">Graphics Designing</a>
            </li>
            <li className="font-[Nunito] text-white">
              <a href="">Digital Marketing & SEO</a>
            </li>
            <li className="font-[Nunito] text-white">
              <a href="">Social Media Handling</a>
            </li>
          </ul>
        </div>

        <div className=" flex lg:justify-end">
          <ul className=" flex flex-col gap-4 lg:items-start">
            <h1 className=" font-[Nunito] text-white text-xl font-bold pl-2 border-l-2 border-secondary">
              OUR Links
            </h1>
            <li className="font-[Nunito] text-white">
              <a href="">Privacy Policy</a>
            </li>
            <li className="font-[Nunito] text-white">
              <a href="">Terms and Conditions</a>
            </li>
            <li className="font-[Nunito] text-white">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className=" mt-8" />
      <h1 className=" text-center font-[Nunito] py-6 text-white">
        © 2023 <span className=" hover:text-primary">Freewell Technology</span>.
        All Rights Reserved by{" "}
        <span className=" hover:text-secondary">Freewell Technology</span>
      </h1>
    </div>
  );
};

export default Footer;
