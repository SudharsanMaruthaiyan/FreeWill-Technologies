import { FaPhoneAlt, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactCards = () => {
  const contacts = [
    {
      title: "Phone",
      icon: <FaPhoneAlt size={30} />,
      description: "+91 9626806328",
      href: "tel:+919626806328",
      bgImage:
        "https://ik.imagekit.io/HoneyJoe/freewill%20technologies%20assetss/5118756.jpg?updatedAt=1744995811309", // Replace with your own
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedinIn size={30} />,
      description: "linkedin.com/in/freewill",
      href: "https://www.linkedin.com/company/free-will-technologies/",
      bgImage:
        "https://ik.imagekit.io/HoneyJoe/freewill%20technologies%20assetss/10464412.png?updatedAt=1744995811295", // Replace with your own
    },
    {
      title: "Instagram",
      icon: <FaInstagram size={30} />,
      description: "@freewill.tech",
      href: "https://www.instagram.com/freewilltechnologies/",
      bgImage:
        "https://ik.imagekit.io/HoneyJoe/freewill%20technologies%20assetss/2227.jpg?updatedAt=1744995811112", // Replace with your own
    },
  ];

  return (
    <div className="w-[95%] lg:w-[85%] mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-nunito">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-110 transition duration-500"
            style={{ backgroundImage: `url(${contact.bgImage})` }}
          />
          <div className="relative z-10 bg-black/60 backdrop-blur-sm h-full p-8 text-white flex flex-col justify-center items-center gap-4 text-center">
            <div className="bg-white text-black p-4 rounded-full shadow-lg group-hover:scale-110 transition duration-300">
              {contact.icon}
            </div>
            <h3 className="text-xl font-bold">{contact.title}</h3>
            <p className="text-base">{contact.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactCards;
