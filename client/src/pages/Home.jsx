import React from "react";
import TopNav from "../components/TopNav";
import Navbar from "../components/Navbar";
import Header from "./Header";
import AboutCompany from "./AboutCompany";

const Home = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className=" w-[98%] xl:w-full xl:px-[5%] mx-auto">
        <TopNav />
      </div>
      <hr />
      <div className=" w-[100%] px-[2%] xl:w-full xl:px-[5%] mx-auto sticky top-0 bg-white">
        <Navbar />
      </div>
      <div className="w-[100%] ">
        <Header />
        <div className=" px-[2%] lg:px-[5%]">
          <AboutCompany />
        </div>
      </div>
    </div>
  );
};

export default Home;
