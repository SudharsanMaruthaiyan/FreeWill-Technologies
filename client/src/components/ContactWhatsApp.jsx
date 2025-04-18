import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


const ContactWhatsApp = () => {
  return (
    <section
      className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center relative font-nunito my-[40px]"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/HoneyJoe/freewill%20technologies%20assetss/world-global-cartography-globalization-earth-international-concept.jpg?updatedAt=1744989313390')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Connect on WhatsApp
        </h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Got questions or want to collaborate? Reach out to us directly on WhatsApp and let's innovate together.
        </p>
        <a
          href="https://wa.me/916382503265" // replace with your real number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition"
        >
          <FaWhatsapp className="mr-2 text-xl" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  )
}

export default ContactWhatsApp
