import { Plus, Minus } from "lucide-react";
import { Collapse } from "react-collapse";

const FaqAccodion = ({ title, desc, open, toggle }) => {
  return (
    <div className="my-5 bg-white shadow-lg accordion rounded-md rounded-t-md">
      <button
        onClick={toggle}
        className={`flex focus:outline-none focus:ring focus:ring-[#BAD3F6] w-full justify-between items-center px-3 rounded-md ${
          open ? "shadow-blue-800 rounded-md focus:ring-0 transition" : ""
        }`}
      >
        <span
          className={`py-5 font-[Nunito] font-bold text-start ${
            open ? "text-primary" : ""
          }`}
        >
          {title}
        </span>
        <div className={`${open ? "text-primary" : ""}`}>
          {open ? <Minus /> : <Plus />}
        </div>
      </button>
      <Collapse
        isOpened={open}
        className={`transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          open ? "transition ease-in-out duration-300" : ""
        }`}
      >
        <div>
          <div className="overflow-hidden px-2 transition">
            <p className="text-[14px] text-[#6c6f70] py-3 leading-[25px] font-[Nunito] px-3">
              {desc}
            </p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default FaqAccodion;
