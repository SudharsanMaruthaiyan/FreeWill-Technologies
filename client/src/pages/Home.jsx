import React from "react";
import Header from "./Header";
import AboutCompany from "./AboutCompany";
import Layout from "../layouts/Layout";
import OurService from "./OurService";

const Home = () => {
  return (
    <div className="2xl:container mx-auto">
      <Layout> 
      <div className="w-[100%] ">
        <Header />
        <AboutCompany />
        <OurService/>
      </div>
      </Layout>
    </div>
  );
};

export default Home;
