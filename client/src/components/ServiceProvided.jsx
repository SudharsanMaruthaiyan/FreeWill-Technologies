import React from "react";
import {
  Code,
  Palette,
  MonitorSmartphone,
  Layers,
  LayoutDashboard,
  Globe,
} from "lucide-react";import { motion } from "framer-motion"

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

const ServiceProvided = () => {
  return (
    <section className="bg-bg-dark py-16 px-6 md:px-20 font-[Nunito] text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </section>
  );
};

export default ServiceProvided;
