import React, { useState } from "react";
import {
  Users,
  Package,
  Search,
  MapPin,
  Award,
  BarChart2,
  Wifi,
  Shield,
  Code,
  Database,
  Server,
  Clock,
  Lightbulb,
  GraduationCap,
  Smartphone,
} from "lucide-react";

const Offer = () => {
  const [activeTab, setActiveTab] = useState("who");

  const tabs = [
    { id: "who", label: "Who", icon: <Users className="w-5 h-5" /> },
    { id: "what", label: "What", icon: <Package className="w-5 h-5" /> },
  ];

  // Content for each tab
  const tabContent = {
    who: [
      {
        title: "Our Team",
        description:
          "Customer-focused technicians providing exceptional service and support",
        icon: <Users className="w-10 h-10" />,
      },
      {
        title: "Our Leadership",
        description:
          "Experienced professionals guiding our vision and strategy",
        icon: <Shield className="w-10 h-10" />,
      },
      {
        title: "Our Developers",
        description: "Skilled engineers building innovative solutions",
        icon: <Code className="w-10 h-10" />,
      },
      {
        title: "Our Support Staff",
        description: "24/7 assistance for all your technical needs",
        icon: <Clock className="w-10 h-10" />,
      },
    ],
    what: [
      {
        title: "Web Development",
        description: "Responsive and dynamic websites built with modern technologies tailored to your business needs.",
        icon: <Code className="w-10 h-10 text-[#1E9CD7]" />,
      },
      {
        title: "App Development",
        description: "Cross-platform mobile applications with seamless UI/UX and robust performance.",
        icon: <Smartphone className="w-10 h-10 text-[#FE861B]" />,
      },
      {
        title: "Internships & Training",
        description: "Upskill students with hands-on industrial training programs and mentorship from professionals.",
        icon: <GraduationCap className="w-10 h-10 text-[#177EAE]" />,
      },
      {
        title: "IT Consultation",
        description: "Strategic advice and technical support to accelerate your digital transformation journey.",
        icon: <Lightbulb className="w-10 h-10 text-[#D76A10]" />,
      },
    ],
    
  };

  // Animation classes for tab transitions
  const getTabContentClass = () => {
    return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ease-in-out";
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 font-[Nunito]">
      <div className="text-center mb-12">
        <p className="text-primary-dark font-bold mb-2">
          WE OFFER BEST IT SERVICES
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-10 text-primary-dark">
          Who, What, How, & Where
        </h1>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap space-x-1 md:space-x-4 border-b border-gray-200 w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center space-x-2 py-4 px-4 md:px-6 flex-grow md:flex-grow-0 transition-all duration-200 
                    ${
                      activeTab === tab.id
                        ? "border-b-2 border-secondary text-primary bg-blue-50 rounded-t-lg shadow-sm"
                        : "text-gray-600 hover:bg-gray-50 hover:text-secondary"
                    }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={getTabContentClass()}>
        {tabContent[activeTab].map((card, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-4 text-gray-800 bg-white p-3 rounded-full shadow-inner">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
