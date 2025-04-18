import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6  w-[100%] px-[2%] xl:w-full xl:px-[5%] mx-auto sticky top-0 bg-white">
      <div className="w-[100px] h-[50px] bg-primary rounded-lg">
        <p className=" text-white flex items-center justify-center h-full">logo</p>
      </div>
      <div>
        <ul className=" flex items-center gap-5">
          <li className=" font-medium">
            <a href="/">Home</a>
          </li>
          <li className=" font-medium">
            <a href="/about">About Us</a>
          </li>
          <li className=" font-medium">
            <a href="/service">Service</a>
          </li>
          <li className=" font-medium">
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
