import React from "react";
import Header from "./Header";
import AboutCompany from "./AboutCompany";
import Layout from "../layouts/Layout";
import OurService from "./OurService";
import GetInTouch from "../components/GetInTouch";
import Offer from "../components/Offer";
import ServiceProvided from "../components/ServiceProvided";

const Home = () => {
  return (
    <div className="max-w-[100%]">
      <Layout>
        <div className="w-[100%] ">
          <Header />
          <AboutCompany />
          <ServiceProvided />
          <Offer />
          <GetInTouch />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
