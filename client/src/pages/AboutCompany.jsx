import React from "react";

const AboutCompany = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-[60vh]">
      <div className="flex items-center justify-center w-full h-full px-20">
        <div className="flex flex-col gap-2">
          <h1>About Company</h1>
          <h1>Keeping Our Promise, Achieving Your Goals</h1>
          <p>Over 38+ Happy Customers</p>

          <hr />

          <p>
            Dedicated to Your Success - Zwork Technology is all about honesty,
            transparency and delivering results. With a team of experts using
            the latest technology, we strive to help businesses grow and achieve
            their goals. Join us on this journey to success.
          </p>
        </div>
      </div>
      <div className=" flex items-center w-full justify-center">
        <div className="bg-green-300 h-[400px] w-full">
          <p className=" flex items-center justify-center h-full w-full">
            image
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
