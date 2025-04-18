import React from "react";
import Header from "./Header";
import AboutCompany from "./AboutCompany";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <div className="2xl:container mx-auto">
      <Layout> 
      <div className="w-[100%] ">
        <Header />
        <div className=" px-[2%] lg:px-[5%]">
          <AboutCompany />
        </div>
      </div>
      </Layout>
    </div>
  );
};

export default Home;
