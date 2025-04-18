import React from "react";
import Button from "../components/Button";
import Service from "../assets/Service";
import OurServiceCard from "../components/OurServiceCard";

const OurService = () => {
  return (
    <div className=" px-[5%] lg:px-[9%] bg-[#F5FAFF] py-20">
      <div className=" space-y-3">
        <h1 className="font-[Nunito] pl-2 border-l-4 border-l-primary-dark text-primary-dark font-blod">
          OUR SERVICE
        </h1>
        <div className=" flex justify-between items-center">
          <h1 className="font-[Nunito] lg:text-[48px] md:text-[32px] text-lg font-bold text-primary-dark leading-none">
            We offer Wide <br />
            Range of Services
          </h1>
          <div>
            <Button
              title="See More"
              classContainer="bg-primary border border-primary px-8 py-3 rounded-lg text-white hover:border-secondary hover:bg-white/90 shadow-2xl transition-all hover:text-secondary hover:border"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Service.map((e, index) => (
          <div key={index}>
            <OurServiceCard title={e.course} icon={e.icon} des={e.des} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
