import React from "react";
import Layout from "../layouts/Layout";
import ServiceHeader from "../components/ServiceHeader";
import { serviceImage, serviceImage2 } from "../assets/image";
import ServiceHeroSection from "../components/ServiceHeroSection";
import ServiceProvided from "../components/ServiceProvided";
import ContactWhatsApp from "../components/ContactWhatsApp";

const Service = () => {
  return (
    <div>
      <Layout>
        <div className="max-w-[100%] mx-auto">
          <ServiceHeader />
          
          <ServiceHeroSection></ServiceHeroSection>
          <ServiceProvided></ServiceProvided>
          <ContactWhatsApp></ContactWhatsApp>
        </div>
      </Layout>
    </div>
  );
};

export default Service;
