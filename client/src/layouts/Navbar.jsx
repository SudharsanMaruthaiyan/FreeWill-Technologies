import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
   
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center py-6">
      <div className=" flex justify-between items-center">
        <div className="w-[100px] h-[50px] bg-primary rounded-lg">
          <p className=" text-white flex items-center justify-center h-full">
            logo
          </p>
        </div>
        <div className=" block lg:hidden">
          <Menu
            className={` ${toggle ? "hidden" : "block"}`}
            onClick={() => setToggle(true)}
          />
          <X
            className={`${toggle ? "block" : "hidden"}`}
            onClick={() => setToggle(false)}
          />
        </div>
      </div>

      <div
        className={` absolute right-0 left-0 top-[-300px] lg:relative lg:top-0 
  ${
    toggle
      ? "absolute left-0 right-0 top-[90px] transition-all duration-700 ease-in-out w-full bg-white shadow-2xl py-5 lg:shadow-none lg:py-0 lg:bg-none"
      : " shadow-none py-0 opacity-0 transition-all duration-700 ease-in-out lg:transform-none lg:duration-0 lg:opacity-100 "
  } `}
      >
        <ul className="flex flex-col items-center lg:flex-row lg:justify-end gap-6">
          <li className="font-medium hover:border-b-2 hover:border-b-blue-800 border-2 border-white transition-all duration-500 ease-in-out">
            <a href="/">Home</a>
          </li>
          <li className="font-medium hover:border-b-2 hover:border-b-blue-800 border-2 border-white transition-all duration-500 ease-in-out">
            <a href="/about">About Us</a>
          </li>
          <li className="font-medium hover:border-b-2 hover:border-b-blue-800 border-2 border-white transition-all duration-500 ease-in-out">
            <a href="/service">Service</a>
          </li>
          <li className="font-medium hover:border-b-2 hover:border-b-blue-800 border-2 border-white transition-all duration-500 ease-in-out">
            <a href="/contact">Contact</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
