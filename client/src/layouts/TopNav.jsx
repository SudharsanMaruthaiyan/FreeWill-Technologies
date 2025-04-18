import { Clock4, Instagram, Linkedin, PhoneCall } from "lucide-react";
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
              <p className="w-10 h-10 rounded-lg bg-green-300 opacity-40 flex justify-center items-center"><Instagram></Instagram></p>
              <p className="w-10 h-10 rounded-lg bg-green-300 opacity-40 flex justify-center items-center"><Linkedin></Linkedin></p>
              <p className="w-10 h-10 rounded-lg bg-green-300 opacity-40 flex justify-center items-center"><PhoneCall /></p>
              <p className="w-10 h-10 rounded-lg bg-green-300 opacity-40 flex justify-center items-center"></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
