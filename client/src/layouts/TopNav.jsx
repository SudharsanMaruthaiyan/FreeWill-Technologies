<<<<<<< HEAD:client/src/layouts/TopNav.jsx
import { Clock4, Instagram, Linkedin, PhoneCall } from "lucide-react";
=======
import {
  Clock4,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
>>>>>>> 6824ca655fd1b8609cae5a019e8fad23dbdce48a:client/src/components/TopNav.jsx
import React from "react";

const TopNav = () => {
  return (
    <div className=" hidden lg:block">
      <div className="flex items-center w-[98%] xl:w-full xl:px-[5%] mx-auto">
        <div className=" py-3">
          <div className=" border-r-2 pr-8 flex items-center flex-nowrap gap-2">
            <div>
              <Clock4 color="#0b2689" className=" stroke-1 w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-slate-500 text-nowrap">
                Monday - Friday:
              </p>
              <p className="font-medium text-nowrap">10 Am - 7 Pm</p>
            </div>
          </div>
        </div>

        <div className=" py-3">
          <div className=" border-r-2 flex items-center gap-2 px-8 flex-nowrap">
            <div>
              <Clock4 color="#0b2689" className=" stroke-1 w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-slate-500 text-nowrap">
                Call for help:
              </p>
              <p className="font-medium text-nowrap">+91 8098 5656 86</p>
            </div>
          </div>
        </div>

        <div className=" py-3">
          <div className="border-r-2 flex items-center gap-2 px-8 flex-nowrap">
            <div>
              <Clock4 color="#0b2689" className=" stroke-1 w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Mail to us</p>
              <p className="font-medium">freewilltech2025@gmail.com</p>
            </div>
          </div>
        </div>

        <div className=" py-3 w-full">
          <div className="flex items-center justify-between gap-5">
           

            <div className="flex items-center gap-2 justify-end w-full">
<<<<<<< HEAD:client/src/layouts/TopNav.jsx
              <p className="w-10 h-10 rounded-lg bg-green-300 opacity-40 flex justify-center items-center"><Instagram></Instagram></p>
              <p className="w-10 h-10 rounded-lg bg-green-300 opacity-40 flex justify-center items-center"><Linkedin></Linkedin></p>
              <p className="w-10 h-10 rounded-lg bg-green-300 opacity-40 flex justify-center items-center"><PhoneCall /></p>
              <p className="w-10 h-10 rounded-lg bg-green-300 opacity-40 flex justify-center items-center"></p>
              
=======
              <Linkedin className="w-9 h-9 bg-[#ECF8FF] stroke-[#4064AC] fill-[#4064AC] hover:bg-[#4064AC] hover:fill-white hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              <Facebook className="w-9 h-9 bg-[#ECF8FF] stroke-[#4064AC] fill-[#4064AC] hover:bg-[#4064AC] hover:fill-white hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              <Instagram className="w-9 h-9 bg-[#fff1f3] stroke-[#D1005C] hover:bg-[#D1005C] hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              <Youtube className="w-9 h-9 bg-[#fff1f3] stroke-[#D1005C] hover:bg-[#D1005C] hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              <Twitter className="w-9 h-9 bg-[#ECF8FF] stroke-[#4064AC] fill-[#4064AC] hover:bg-[#4064AC] hover:fill-white hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
>>>>>>> 6824ca655fd1b8609cae5a019e8fad23dbdce48a:client/src/components/TopNav.jsx
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
