import { Phone } from "lucide-react";
import { useState } from "react";
import FaqAccodion from "./FaqAccordian";
import { profile3 } from "../assets/image";

const Faq = () => {
    const [open, setOpen] = useState(false);
    const toggle = (index) => {
        if (open === index) {
            return setOpen(null);
        }
        setOpen(index);
    };

    const accordionData = [
        {
          title: "What services does FreeWill Technologies offer?",
          desc: "We provide Web Design, Web & Mobile App Development, Graphic Design, CMS-based Development, and Business Portfolio Sites. Our solutions are tailored to meet each client’s specific goals using modern tools and industry best practices."
        },
        {
          title: "Do you develop custom business portfolio websites?",
          desc: "Yes, we specialize in crafting professional and visually compelling portfolio websites that help individuals and businesses showcase their work and brand identity effectively online."
        },
        {
          title: "Can FreeWill Technologies revamp my existing website?",
          desc: "Absolutely! Whether you want a design refresh, performance optimization, or a full rebuild with modern tech stacks, we can revamp your existing website to match today’s trends and user expectations."
        },
        {
          title: "What technologies do you use for web and app development?",
          desc: "We use cutting-edge technologies such as React, Node.js, Express, MongoDB, MySQL, and Flutter for building fast, responsive, and scalable web and mobile applications tailored to your business needs."
        }
      ];
      

    return (
        <div className="2xl:container mx-auto bg-bg-light pb-20 py-14">
            <div className="lg:w-[90%] xl:w-[90%] mx-auto py-20 w-[90%]">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
                    <div className="relative">
                        <div className="">
                            <img src={profile3} alt="Profile" className="relative z-20" />
                        </div>
                        <div className="absolute xl:absolute md:absolute xl:-right-3 xl:top-[524px] bg-primary-dark lg:absolute lg:top-[400px] lg:right-0 md:right-3 md:top-[604px] py-5 px-7 rounded-lg z-30">
                            <h1 className="font-[Nunito] text-[22px] font-bold text-white">
                                Contact Us For a <span className="text-[#1176F0]">Free Learning</span> <br className="lg:hidden xl:block" /> Consulting Evaluation
                            </h1>
                            <div className="flex items-center gap-1 py-3 px-3 bg-[#1176F0] mt-4 rounded-lg w-fit">
                                <Phone className="stroke-white" />
                                <p className="text-white"><a href="tel:+91 80729 48266">+91 63825 03265</a></p>
                            </div>
                        </div>
                    </div>
                    {/* FaqAccodion section  */}
                    <div className="mt-72 md:mt-40 lg:mt-0">
                        <div>
                            <div className="flex items-center gap-1">
                                <div className="p-2 bg-[#6daaf590] rounded-full">
                                    <div className="h-3 w-3 bg-primary rounded-full shadow-yellow-300"></div>
                                </div>
                                <p className="text-primary font-bold font-[Nunito] text-[18px]">FAQ</p>
                            </div>
                            <p className="text-[48px] font-[Nunito] leading-[57px] pt-4 font-bold">Frequently Asked <br /> Questions</p>
                            <p className="pt-5 font-[Nunito] text-[#6c6f70] text-[16px] pb-5">Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time restore.</p>
                            {
                                accordionData.map((data, index) => {
                                    return (
                                        <FaqAccodion key={index} open={index === open} title={data.title} desc={data.desc} toggle={() => toggle(index)} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
