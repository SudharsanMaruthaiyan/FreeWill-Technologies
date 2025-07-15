import {
  Clock4,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

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
              <Phone color="#0b2689" className=" stroke-1 w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-slate-500 text-nowrap">
                Call for help:
              </p>
              <p className="font-medium text-nowrap">+91 96268 06328</p>
            </div>
          </div>
        </div>

        <div className=" py-3">
          <div className="border-r-2 flex items-center gap-2 px-8 flex-nowrap">
            <div>
              <Mail color="#0b2689" className=" stroke-1 w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Mail to us</p>
              <p className="font-medium">hr@freewilltech.in</p>
            </div>
          </div>
        </div>

        <div className=" py-3 w-full">
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-2 justify-end w-full">
              <a
                href="https://www.linkedin.com/company/free-will-technologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-9 h-9 bg-[#ECF8FF] stroke-[#4064AC] fill-[#4064AC] hover:bg-[#4064AC] hover:fill-white hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              </a>
              <a
                href="https://www.instagram.com/freewill_tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-9 h-9 bg-[#fff1f3] stroke-[#D1005C] hover:bg-[#D1005C] hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              </a>
              <a
                href="https://wa.me/919626806328"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-9 h-9 bg-[#ECF8FF] stroke-[#4064AC] fill-[#4064AC] hover:bg-[#4064AC] hover:fill-white hover:stroke-white transition-all p-[10px] rounded-lg duration-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
