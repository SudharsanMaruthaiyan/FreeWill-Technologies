import React from "react";
import { Code, PenTool, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion"

const services = [
  {
    icon: <Code size={32} className="text-secondary" />,
    title: "Web Development",
    description:
      "Custom web solutions crafted to boost your digital presence with modern and scalable technologies.",
  },
  {
    icon: <PenTool size={32} className="text-secondary" />,
    title: "UI/UX Design",
    description:
      "Intuitive and engaging user experiences designed for impact and ease of use.",
  },
  {
    icon: <GraduationCap size={32} className="text-secondary" />,
    title: "Trainings",
    description:
      "Industry-relevant tech training programs for individuals and institutions.",
  },
  {
    icon: <Briefcase size={32} className="text-secondary" />,
    title: "Internships",
    description:
      "Hands-on internships that bridge the gap between academics and the tech industry.",
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
