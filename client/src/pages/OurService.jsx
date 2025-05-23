import React from "react";
import Button from "../components/Button";
import {
  Code,
  Palette,
  MonitorSmartphone,
  Layers,
  LayoutDashboard,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion"

const OurService = () => {
  const services = [
    {
      icon: <LayoutDashboard size={32} className="text-secondary" />,
      title: "Web Design",
      description:
        "Crafting visually stunning and user-centric website designs tailored to your brand identity.",
    },
    {
      icon: <Code size={32} className="text-secondary" />,
      title: "Web Development",
      description:
        "Responsive and dynamic websites built with modern technologies for seamless performance.",
    },
    {
      icon: <Palette size={32} className="text-secondary" />,
      title: "Graphic Design",
      description:
        "Creative graphics, logos, and branding materials to elevate your visual presence.",
    },
    {
      icon: <MonitorSmartphone size={32} className="text-secondary" />,
      title: "App Development",
      description:
        "Robust mobile applications for Android and iOS, tailored to your business needs.",
    },
    {
      icon: <Layers size={32} className="text-secondary" />,
      title: "CMS-Based Development",
      description:
        "Flexible and scalable content management systems for easy site control and updates.",
    },
    {
      icon: <Globe size={32} className="text-secondary" />,
      title: "Business Portfolio Sites",
      description:
        "Professional websites to showcase your business and services, enhancing credibility and reach.",
    },
  ];
  return (
    <div className=" px-[5%] lg:px-[9%] bg-[#F5FAFF] py-20 space-y-10">
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
            <button
          
              
              className="bg-primary border border-primary px-8 py-3 rounded-lg text-white hover:border-secondary hover:bg-white/90 shadow-2xl transition-all hover:text-secondary hover:border"
            ><a href="/service"> See more</a></button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-primary/10 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
