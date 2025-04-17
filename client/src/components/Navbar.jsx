import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 bg-">
      <div className="w-[100px] h-[50px] bg-primary rounded-lg">
        <p className=" text-white flex items-center justify-center h-full">logo</p>
      </div>
      <div>
        <ul className=" flex items-center gap-5">
          <li className=" font-medium">
            <a href="">Home</a>
          </li>
          <li className=" font-medium">
            <a href="">About Us</a>
          </li>
          <li className=" font-medium">
            <a href="">Service</a>
          </li>
          <li className=" font-medium">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
