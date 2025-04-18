import React from "react";
import Button from "../components/Button";
import { Code, PenTool, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion"

const OurService = () => {
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
            <Button
              title="See More"
              classContainer="bg-primary border border-primary px-8 py-3 rounded-lg text-white hover:border-secondary hover:bg-white/90 shadow-2xl transition-all hover:text-secondary hover:border"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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
