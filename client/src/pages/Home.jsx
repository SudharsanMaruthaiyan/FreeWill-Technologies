import React from "react";
import Header from "./Header";
import AboutCompany from "./AboutCompany";
import Layout from "../layouts/Layout";
import OurService from "./OurService";
import GetInTouch from "../components/GetInTouch";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <div className="2xl:container mx-auto">
      <Layout>
        <div className="w-[100%] ">
          <Header />
          <AboutCompany />
          <OurService />
          <Offer />
          <GetInTouch />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
