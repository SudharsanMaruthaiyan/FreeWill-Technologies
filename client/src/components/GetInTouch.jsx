import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send the form data to your backend here
  };

  return (
    <div className="w-full flex flex-col md:flex-row rounded-lg overflow-hidden px-[5%] lg:px-[9%] py-20">
      {/* Left Side - Contact Info */}
      <div className="md:w-2/5 bg-[url(https://ik.imagekit.io/HoneyJoe/freewill%20technologies%20assetss/rag-doll-with-giant-magnifying-glass-looking-blue.jpg?updatedAt=1745003532644)] bg-cover text-white px-8 relative rounded-[5%]">
        <div className="absolute inset-0 bg-black opacity-30 rounded-[5%]"></div>

        <div className="relative z-10 h-full flex flex-col justify-center space-y-12 py-10">
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="mr-4" size={24} />
              <div>
                <h3 className="text-xl font-bold font-[Nunito]">Email Us</h3>
                <p className="font-[Nunito]">hr@freewilltech.in</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Phone className="mr-4" size={24} />
              <div>
                <h3 className="text-xl font-bold font-[Nunito]">Call Us</h3>
                <p className="font-[Nunito]">+91 96268 06328</p>
              </div>
            </div>
          </div>

          <button className="border-2 border-white py-3 px-4 font-bold text-center hover:bg-white hover:text-gray-900 transition duration-300 font-[Nunito]">
            <a
              href="https://wa.me/916382503265"
              target="_blank"
              rel="noopener noreferrer"
            >
              CHAT ON WHATSAPP
            </a>
          </button>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-3/5 p-8">
        <div className="mb-8">
          <div className="text-primary-dark font-bold mb-2 font-[Nunito]">GET IN TOUCH</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark font-[Nunito] mb-4">
            Let’s Build Something Great Together with FreeWill Technologies
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="name@example.com *"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="+91 xxxxxxxxxx *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              required
            />
            <select className="w-full border border-gray-300 p-3 rounded text-gray-500">
              <option disabled selected>
                Not defined at the moment *
              </option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>Internship Program</option>
              <option>IT Solutions</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your idea or need *"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded h-32"
            required
          ></textarea>

          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <input type="checkbox" id="verify" className="mr-2" required />
              <label htmlFor="verify" className="text-sm">
                Verify you are human
              </label>
            </div>
            <div className="bg-gray-200 p-2 rounded">
              <div className="text-xs text-gray-600">CLOUDFLARE</div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-bold py-4 px-6 rounded w-full hover:bg-primary-dark transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
